const File = require("../models/File");

const uploadFile = async (req, res) => {
    try {
        const { filename, path, size } = req.file;

        // Save file info to database
        const newFile = new File({ filename, path, size, owner: req.user.id });
        await newFile.save();

        res.status(201).json({ message: "File uploaded successfully", file: newFile });
    } catch (error) {
        res.status(500).json({ message: "File upload failed", error });
    }
};

const deleteFile = async (req, res) => {
    try {
        const { fileId } = req.params;

        const file = await File.findById(fileId);
        if (!file) return res.status(404).json({ message: "File not found" });

        await file.deleteOne();
        res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "File deletion failed", error });
    }
};

module.exports = {
    uploadFile,
    deleteFile
};
