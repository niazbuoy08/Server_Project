const File = require("../models/File");

const shareFile = async (req, res) => {
    try {
        const { fileId, sharedWith } = req.body;

        const file = await File.findById(fileId);
        if (!file) return res.status(404).json({ message: "File not found" });

        // Add user to shared list
        file.sharedWith.push(sharedWith);
        await file.save();

        res.status(200).json({ message: "File shared successfully", file });
    } catch (error) {
        res.status(500).json({ message: "File sharing failed", error });
    }
};

module.exports = {
    shareFile
};
