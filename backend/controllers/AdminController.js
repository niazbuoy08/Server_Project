const User = require("../models/User");
const Session = require("../models/Session");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

const getAllSessions = async (req, res) => {
    try {
        const sessions = await Session.find();
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sessions", error });
    }
};

module.exports = {
    getAllUsers,
    getAllSessions
};
