import Redis from 'ioredis';
import nodemailer from 'nodemailer';

const redis = new Redis(process.env.REDIS_URL);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        try {
            // Save email to Redis
            await redis.add('subscribers', email);

            // Send confirmation email
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

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

            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'Subscription successful' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
