const express=require('express');
const { env } = require('process');
import mongoose from "mongoose";
import cors from "cors";
import dbConnection from "./dbConnection";

// Create express app
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

// Connect  to the database
try {
    dbConnection();
    console.log("Connected to the database on port ${process.env.PORT}");
} catch (err) {
    console.log(err);
}

// Hello world
app.get('/', (req, res) => {
    res.send('Hello World');
});

// User routes
app.get('/user', (req, res) => {
    res.send({
        name: "",
        email: "",
        folders: [],
        files: [],
        recentFiles: [],
    }); 
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