import { Redis } from "@upstash/redis"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

const redis = Redis.fromEnv();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;


        // Save email to Redis
        await redis.rpush('subscribers', email);
        const s = await redis.lrange("subscribers", 0, -1);
        console.log(s);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for signing up!',
            text: `
                    Thank you for signing up for our mailing list!

                    Preparedness Resources:
                    - Natural Health Resources - Healthline: https://www.healthline.com/health/home-remedies-for-allergies
                    - An Introduction to Rhinitis - NIH National Library of Medicine: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8532887/
                    - Examples of Home Remedies: https://www.medicinenet.com/best_home_remedies_for_upper_respiratory_infection/article.htm

                    Preparedness Checklist:
                    - First Aid Kit
                    - Disposable Gloves
                    - Emergency Supplies
                    - Non-Perishable Food
                    - Cooking Supplies
                    - A Change of Clothes
                    - N-95 or better Face Masks
                    - Emergency Contacts In a Sealed Plastic Bag
                    - All Medications including Those for Allergies (and any inhalers and/or equipment)
                    - List of Medications and Use in a plastic bag with medications in a separate bag together
                    
                    Thank you for using our App!
                `,
        };

        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'trincellshelvin@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });

        res.status(200).json({ message: 'Subscription successful' });

    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
