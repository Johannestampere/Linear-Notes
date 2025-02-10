import mongoose from "mongoose";

async function dbConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database");
    } catch (err) {
        console.log(err);
    }  
}

export default dbConnection;