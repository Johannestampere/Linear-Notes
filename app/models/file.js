import mongoose from "mongoose";
const uri = process.env.MONGODB_URI;

const fileSchema = new mongoose.Schema({
    name: String,
    owner : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Folder" }],
    content: [
        {
            type: { type: String, enum: ["h1", "h2", "text", "latex", "2d", "3d"] },
            data: mongoose.Schema.Types.Mixed,
        }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const File = mongoose.models.File || mongoose.model("File", fileSchema);

export default File;