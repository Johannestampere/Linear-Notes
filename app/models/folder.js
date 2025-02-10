import mongoose from "mongoose";
const uri = process.env.DB;

const folderSchema = new mongoose.Schema({
    name: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Folder" }],
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
});

export default mongoose.models.Folder || mongoose.model("Folder", folderSchema);