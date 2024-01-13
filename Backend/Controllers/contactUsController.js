const { contactUsSendEmailSingle } = require("../Utils/ContactUsSendEmail/contactUsSendEmail");

const contactUsEmail = async (req, res) => {
    try {
        const { name, email, phoneNumber, query } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Name is required", success: false });
        };
        if (!email) {
            return res.status(400).json({ message: "Email is required", success: false });
        };
        if (!phoneNumber) {
            return res.status(400).json({ message: "Phone Number is required", success: false });
        };
        if (!query) {
            return res.status(400).json({ Message: "Query is required", success: false });
        };
        await contactUsSendEmailSingle(name, email, phoneNumber, query);
        return res.status(200).json({ message: "Email has been sent successfully", success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
}

module.exports = { contactUsEmail };