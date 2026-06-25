const app = require("./app");
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to the MongoDB Database');

        // start the server to listen for http requests
        app
        .listen(3001, 'localhost', (error) => {
            if (error) {
                console.log('Error starting the server:', error.message);
                return; // exits the function immediately if there is an error
            }

            console.log('Server is running at http://localhost:3001')
        });
    })
    .catch((error) => {
        console.log('Error connecting to the MongoDB Database:', error.message);
    })