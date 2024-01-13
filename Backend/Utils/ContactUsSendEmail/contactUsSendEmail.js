const nodemailer = require('nodemailer');

async function contactUsSendEmailSingle(name, email, phoneNumber, query) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.NODE_MAILER_USER,
                pass: process.env.NODE_MAILER_PASSWORD
            },
        });

        const mailOptions = {
            from: process.env.NODE_MAILER_USER,
            to: process.env.NODE_MAILER_USER,
            subject: 'A Query From Application',
            text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nQuery: ${query}`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

module.exports = { contactUsSendEmailSingle };
