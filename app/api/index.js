import dotenv from 'dotenv';

// Imports
import express from 'express';
import dbConnection from './dbConnection.js';
const port = process.env.PORT || 3001
import cors from "cors"
import { Db } from 'mongodb';
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

// User routes
app.get('/user', async (req, res) => {
    const { user } = req.body;
    
});

app.post('/user', (req, res) => {
    res.send({
        name: "",
        email: "",
        folders: [],
        files: [],
        recentFiles: [],
    });
});

// Folder routes
app.get('/user/folders', (req, res) => {
    res.send({
        name: "",
        owner: "",
        parent: "",
        children: [],
        files: [],
    });
});

app.post('/user/folders', (req, res) => {
    res.send({
        name: "",
        owner: "",
        parent: "",
        children: [],
        files: [],
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});