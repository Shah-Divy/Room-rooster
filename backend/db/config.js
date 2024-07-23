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


// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DBHOST, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('MongoDB connection error:', error);
//         process.exit(1); // Exit process with failure
//     }
// };

// connectDB();
