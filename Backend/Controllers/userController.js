const testUser = async (req, res) => {
    try {
        res.status(200).json({ message: "API is working properly.", success: true });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const testUserRegister = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        console.log(firstName, lastName);
        res.status(200).json({ message: "API is working properly.", success: true });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

module.exports = { testUser, testUserRegister };