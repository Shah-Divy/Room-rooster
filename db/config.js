// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();  // Load environment variables from .env file

// const dbHOST = process.env.DBHOST;

// mongoose.connect(dbHOST, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('MongoDB Connected...');
//     })
//     .catch((err) => {
//         console.error('Error while connecting to MongoDB:', err);
//     });

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,  // This is no longer necessary and can be removed
    useUnifiedTopology: true // This is no longer necessary and can be removed
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
