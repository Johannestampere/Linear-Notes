import dbConnection from '../dbConnection.js';
import User from "../../models/user.js";
import Folder from "../../models/folder.js";
import { NextResponse } from 'next/server';

// POST request to create a new user
export async function POST(request) {
    try {
        // Connect to the database
        await dbConnection();
        
        const { nameFrontend, ownerFrontend, parentFrontend } = await request.json();

        let user = await User.findOne({ email: ownerFrontend });

        // Create a new file in the specific folder
        const folder = new Folder({
            name: nameFrontend,
            owner: user._id,
            parent: parentFrontend,
            children: [],
            files: [],
        });

        
        await folder.save();

        // Add the folder to the user's folders
        user.folders.push(folder._id);
        await user.save();

        return NextResponse.json({ message: "Folder created", folder }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred while processing the request' }, { status: 500 });
    }
}