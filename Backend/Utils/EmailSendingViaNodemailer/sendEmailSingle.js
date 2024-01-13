const nodemailer = require('nodemailer');

async function sendEmailSingle(toEmail, subject, text) {
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
            to: toEmail,
            subject: subject,
            text: text,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

module.exports = { sendEmailSingle };