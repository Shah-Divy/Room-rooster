// const mongoose = require('mongoose');
// mongoose.connect("");



const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();  // Load environment variables from .env file

const dbHOST = process.env.DBHOST;

mongoose.connect(dbHOST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected...');
    })
    .catch((err) => {
        console.error('Error while connecting to MongoDB:', err);
    });
