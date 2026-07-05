const app = require("./app");
const mongoose = require('mongoose');

const {MONGODB_URL,PORT, HOST } = require("./utils/config")


mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log('Connected to the MongoDB Database');

        // start the server to listen for http requests
        app
        .listen(PORT, HOST, (error) => {
            if (error) {
                console.log('Error starting the server:', error.message);
                return; // exits the function immediately if there is an error
            }

            console.log(`Server is running at http://${HOST}:${PORT}`)
        });
    })
    .catch((error) => {
        console.log('Error connecting to the MongoDB Database:', error.message);
    })