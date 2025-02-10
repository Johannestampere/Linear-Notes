import mongoose from "mongoose";
import "dotenv/config";

async function dbConnection() {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Connected to the database");
    } catch (err) {
        console.log(err);
    }  
}

export default dbConnection;