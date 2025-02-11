import mongoose from "mongoose";
const uri = process.env.DB;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    folders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Folder" }],
    recentFiles: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
});

export default mongoose.models.User || mongoose.model("User", userSchema);