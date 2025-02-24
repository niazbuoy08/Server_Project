const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        ipAddress: { type: String, required: true },
        userAgent: { type: String },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Session", SessionSchema);
