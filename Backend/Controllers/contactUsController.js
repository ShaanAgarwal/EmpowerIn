const { contactUsSendEmailSingle } = require("../Utils/ContactUsSendEmail/contactUsSendEmail");
const ContactUsEmailAPI = require('../Models/Audit Logs/Contact Us Controller/contactUsEmailAPI');

const contactUsEmail = async (req, res) => {
    try {
        const { name, email, phoneNumber, query } = req.body;
        if (!name || !email || !phoneNumber || !query) {
            return res.status(400).json({ message: "All fields are required", success: false });
        };
        await contactUsSendEmailSingle(name, email, phoneNumber, query);
        await ContactUsEmailAPI.create({name: name, email: email, phoneNumber: phoneNumber, query: query, action: "Email has been sent successfully", success: true});
        return res.status(200).json({ message: "Email has been sent successfully", success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
}

module.exports = { contactUsEmail };