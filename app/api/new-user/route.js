import dbConnection from '../dbConnection.js';
import User from "../../models/user.js";
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
      await dbConnection();
      
      const { email, name, id } = await request.json();
  
      let user = await User.findOne({ email: email });
  
      if (!user) {
        user = new User({
          email,
          name,
          id,
          folders: [],
          files: [],
          recentFiles: [],
        });
  
        await user.save();
  
        return NextResponse.json({ message: "User created", user }, { status: 201 });
      } else {
        return NextResponse.json({ message: "User found", user }, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'An error occurred while processing the request' }, { status: 500 });
    }
  }