const User = require("../Models/userSchema");

const getActiveUsers = async (req, res) => {
    try {
        const activeUsers = await User.find({ isBlocked: false });
        return res.status(200).json({ message: "Users who are currently active", success: true, activeUsers });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", success: false });
    };
};

const getBlockedUsers = async(req,res) => {
    try {
        const blockedUsers = await User.find({isBlocked: true});
        return res.status(200).json({messge: "Users who are blocked", success: true, blockedUsers});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error" ,success: false});
    };
};

module.exports = { getActiveUsers, getBlockedUsers };