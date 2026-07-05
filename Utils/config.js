require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;
const HOST = process.env.HOST;

module.exports = {
    MONGODB_URL,
    PORT,
    HOST
}