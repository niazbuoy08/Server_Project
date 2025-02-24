const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
    {
        filename: { type: String, required: true },
        path: { type: String, required: true },
        owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    { timestamps: true }
);

module.exports = mongoose.model("File", FileSchema);
