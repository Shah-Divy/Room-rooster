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


// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();  // Load environment variables from .env file

// const dbHOST = process.env.DBHOST;

// mongoose.connect(dbHOST)
//     .then(() => {
//         console.log('MongoDB Connected...');
//     })
//     .catch((err) => {
//         console.error('Error while connecting to MongoDB:', err);
//     });



const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DBHOST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected');
        process.exit(0);
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });
