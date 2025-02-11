import dbConnection from '../dbConnection.js';
import User from "../../models/user.js";
import { NextResponse } from 'next/server';

// POST request to create a new user
export async function POST(request) {
    try {
        // Connect to the database
        await dbConnection();
        
        const { email, name, id } = await request.json();

        let user = await User.findOne({ email: email });

        // Create a new user if they don't exist
        // folders, files, and recentFiles are empty arrays
        file = new File({
            name: String,
            owner : user,
            parent: { type: mongoose.Schema.Types.ObjectId, ref: "Folder" },
            children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Folder" }],
            content: [],
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
        });
        
        await file.save();

        return NextResponse.json({ message: "File created", file }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred while processing the request' }, { status: 500 });
    }
}