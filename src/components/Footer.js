import { useState } from 'react';
import fetch from 'node-fetch'; // Add this to send email

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Save email to Redis and send email
        await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        setEmail('');
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="email-subscription">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>

                <div className="thank-you-message">
                    <p>Thank you for using our App!</p>
                </div>
            </div>

            {/* Additional Styling */}
            <style jsx>{`
                .email-subscription {
                    margin-top: 20px;
                    text-align: center;
                }

                .thank-you-message {
                    margin-top: 20px;
                    text-align: center;
                    font-size: larger;
                    font-weight: bold;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
