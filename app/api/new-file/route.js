import dbConnection from '../dbConnection.js';
import User from "../../models/user.js";
import { NextResponse } from 'next/server';
import { useFolder } from '@/app/context/folderContext.js';

// POST request to create a new user
export async function POST(request) {
    try {
        // Connect to the database
        await dbConnection();
        
        const { name, owner, parent, content } = await request.json();

        let user = await User.findOne({ email: email });

        // Create a new file in the specific folder
        const file = new File({
            name,
            owner,
            parent,
            content,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        
        await file.save();

        return NextResponse.json({ message: "File created", file }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred while processing the request' }, { status: 500 });
    }
}