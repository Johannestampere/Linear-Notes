import "dotenv/config";

// Imports
import express from 'express';
import dbConnection from './dbConnection.js';
const port = process.env.PORT || 3001
import cors from "cors"
import User from '../models/user.js'
import Folder from '../models/folder.js'
import File from '../models/file.js';

// Create express app
const app = express()

// Configure express app
app.use(express.json())
app.use(cors()) // middleware


// Connect to mongoDB
try {
    dbConnection()
    console.log(`Connected to db on port ${port}`)
} catch (e) {
    console.log(e)
}

// Hello world
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Initialize user in db
app.post('/new-user', async (req, res) => {
    try {
        const { email, name } = req.body

        const user = await User.findOne({ email: email })

        if (!user) {
            const newUser = new User({
                email,
                name,
                id,
                folders: [],
                files: [],
                recentFiles: [],
            })

            await newUser.save()
            res.send("User created")
        }

        res.json(user)
    } catch (e) {
        console.error(e)
    }
})
        

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});