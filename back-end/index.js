// Set Up express and cors//
const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Set up mongoose and mongodbURL //
const mongoose = require('mongoose');
MONGODB_URL = 'mongodb+srv://nhokcherry34:bao24112001@ngocbao.jgr3j.mongodb.net/reminders?retryWrites=true&w=majority'
PORT= 4000;
HOST= '0.0.0.0';

mongoose.connect(MONGODB_URL)
    .then(()=> {
        app.listen(PORT, HOST, ()=>{
            console.log("Server is listening to localhost:3000 and successfully connected to the MongoDb Database")
        })
    })
    .catch((error) => {
        console.log(error);
    })

// Set up Routes //
const routes = require('./routes/userRoute');

app.use("/api/user", routes);
