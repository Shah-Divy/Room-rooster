// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const multer = require('multer');
// require('./db/config');
// const User = require('./db/Divy');
// const Detail = require('./db/Detail');

// dotenv.config();

// const app = express();

// const corsConfig = {
//     origin: 'https://room-rooster-kappa.vercel.app', // Ensure this matches your frontend URL
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//    // preflightContinue: false,
//    // optionsSuccessStatus: 204,
// };

// app.use(cors(corsConfig));

// // Explicitly handle preflight requests
// app.options('*', cors(corsConfig));

// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

// // Configure multer for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
// });

// app.get('/', (req, res) => {
//     res.send('Products API running');
// });

// app.get('/home', (req, res) => {
//     res.send('API running');
// });

// // User Signup
// app.post('/register', async (req, res) => {
//     try {
//         let user = new User(req.body);
//         await user.validate(); // Validate user data
//         let result = await user.save();
//         result = result.toObject();
//         delete result.password;
//         res.send(result);
//     } catch (error) {
//         console.error('Error during registration:', error);
//         if (error.name === 'ValidationError') {
//             res.status(400).send({ error: 'Validation failed', details: error.errors });
//         } else {
//             res.status(500).send({ error: 'Failed to register user' });
//         }
//     }
// });

// // User Login
// app.post('/login', async (req, res) => {
//     try {
//         if (req.body.password && req.body.email) {
//             let user = await User.findOne({ email: req.body.email, password: req.body.password }).select('-password');
//             if (user) {
//                 res.send(user);
//             } else {
//                 res.status(404).send({ result: 'No User Found' });
//             }
//         } else {
//             res.status(400).send({ result: 'Email and password are required' });
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).send({ error: 'Failed to login user' });
//     }
// });

// // API to insert all the details
// app.post('/details', upload.single('image'), async (req, res) => {
//     try {
//         let detail = new Detail({
//             name: req.body.name,
//             price: req.body.price,
//             description: req.body.description,
//             phoneNumber: req.body.phoneNumber,
//             sqft: req.body.sqft,
//             bed: req.body.bed,
//             bath: req.body.bath,
//             ownername: req.body.ownername,
//             deposit: req.body.deposit,
//             FurnishedStatus: req.body.FurnishedStatus,
//             Availability: req.body.Availability,
//             Perferredfor: req.body.Perferredfor,
//             ageofconstruction: req.body.ageofconstruction,
//             info: req.body.info,
//             image: {
//                 data: req.file.buffer,
//                 contentType: req.file.mimetype,
//             },
//         });
//         let result = await detail.save();
//         res.send(result);
//     } catch (error) {
//         res.status(500).send({ error: 'Failed to save detail' });
//     }
// });

// // API to retrieve all the details from the DB
// app.get('/details', async (req, res) => {
//     try {
//         let details = await Detail.find();
//         let formattedDetails = details.map((detail) => ({
//             _id: detail._id,
//             name: detail.name,
//             price: detail.price,
//             description: detail.description,
//             phoneNumber: detail.phoneNumber,
//             sqft: detail.sqft,
//             bed: detail.bed,
//             bath: detail.bath,
//             image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null,
//         }));
//         res.send(formattedDetails);
//     } catch (error) {
//         res.status(500).send({ error: 'Failed to retrieve details' });
//     }
// });

// // API to retrieve a particular detail by ID
// app.get('/details/:id', async (req, res) => {
//     try {
//         let detail = await Detail.findById(req.params.id);
//         if (!detail) {
//             return res.status(404).send({ error: 'Detail not found' });
//         }
//         let formattedDetail = {
//             _id: detail._id,
//             name: detail.name,
//             price: detail.price,
//             description: detail.description,
//             phoneNumber: detail.phoneNumber,
//             sqft: detail.sqft,
//             bed: detail.bed,
//             bath: detail.bath,
//             ownername: detail.ownername,
//             deposit: detail.deposit,
//             FurnishedStatus: detail.FurnishedStatus,
//             Availability: detail.Availability,
//             Perferredfor: detail.Perferredfor,
//             ageofconstruction: detail.ageofconstruction,
//             info: detail.info,
//             image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null,
//         };
//         res.send(formattedDetail);
//     } catch (error) {
//         res.status(500).send({ error: 'Failed to retrieve detail' });
//     }
// });

// // Search endpoint
// app.get('/search', async (req, res) => {
//     try {
//         let { name, price, description } = req.query;
//         let searchCriteria = {};

//         if (name) {
//             searchCriteria.name = new RegExp(name, 'i'); // Case insensitive regex search
//         }

//         if (price) {
//             searchCriteria.price = price;
//         }

//         if (description) {
//             searchCriteria.description = new RegExp(description, 'i'); // Case insensitive regex search
//         }

//         let results = await Detail.find(searchCriteria);
//         res.send(results);
//     } catch (error) {
//         res.status(500).send({ error: 'Failed to search details' });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
require('./db/config');
const User = require('./db/Divy');
const Detail = require('./db/Detail');

dotenv.config();

const app = express();

const corsConfig = {
    origin: 'https://room-rooster-kappa.vercel.app', // Ensure this matches your frontend URL
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsConfig));

// Explicitly handle preflight requests
app.options('*', cors(corsConfig));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
});

app.get('/', (req, res) => {
    res.send('Products API running');
});

app.get('/home', (req, res) => {
    res.send('API running');
});

// User Signup
app.post('/register', async (req, res) => {
    try {
        let user = new User(req.body);
        await user.validate(); // Validate user data
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        res.send(result);
    } catch (error) {
        console.error('Error during registration:', error);
        if (error.name === 'ValidationError') {
            res.status(400).send({ error: 'Validation failed', details: error.errors });
        } else {
            res.status(500).send({ error: 'Failed to register user' });
        }
    }
});

// User Login
app.post('/login', async (req, res) => {
    try {
        if (req.body.password && req.body.email) {
            let user = await User.findOne({ email: req.body.email, password: req.body.password }).select('-password');
            if (user) {
                res.send(user);
            } else {
                res.status(404).send({ result: 'No User Found' });
            }
        } else {
            res.status(400).send({ result: 'Email and password are required' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send({ error: 'Failed to login user' });
    }
});

// API to insert all the details
app.post('/details', upload.array('images', 3), async (req, res) => {
    try {
        console.log('Received request to add details');
        
        const images = req.files.map(file => ({
            data: file.buffer,
            contentType: file.mimetype,
        }));

        let detail = new Detail({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            phoneNumber: req.body.phoneNumber,
            sqft: req.body.sqft,
            bed: req.body.bed,
            bath: req.body.bath,
            ownername: req.body.ownername,
            deposit: req.body.deposit,
            FurnishedStatus: req.body.FurnishedStatus,
            Availability: req.body.Availability,
            Perferredfor: req.body.Perferredfor,
            ageofconstruction: req.body.ageofconstruction,
            info: req.body.info,
            location: req.body.location,
            images: images,
        });

        console.log('Detail object created, saving to database');

        let result = await detail.save();

        console.log('Detail saved successfully');
        res.send(result);
    } catch (error) {
        console.error('Error saving detail:', error);
        res.status(500).send({ error: 'Failed to save detail' });
    }
});

// API to retrieve all the details from the DB
app.get('/details', async (req, res) => {
    try {
        let details = await Detail.find();
        let formattedDetails = details.map((detail) => ({
            _id: detail._id,
            name: detail.name,
            price: detail.price,
            description: detail.description,
            phoneNumber: detail.phoneNumber,
            sqft: detail.sqft,
            bed: detail.bed,
            bath: detail.bath,
            location: detail.location,
            images: detail.images.map(image => `data:${image.contentType};base64,${image.data.toString('base64')}`),
        }));
        res.send(formattedDetails);
    } catch (error) {
        res.status(500).send({ error: 'Failed to retrieve details' });
    }
});

// API to retrieve a particular detail by ID
app.get('/details/:id', async (req, res) => {
    try {
        let detail = await Detail.findById(req.params.id);
        if (!detail) {
            return res.status(404).send({ error: 'Detail not found' });
        }
        let formattedDetail = {
            _id: detail._id,
            name: detail.name,
            price: detail.price,
            description: detail.description,
            phoneNumber: detail.phoneNumber,
            sqft: detail.sqft,
            bed: detail.bed,
            bath: detail.bath,
            ownername: detail.ownername,
            deposit: detail.deposit,
            FurnishedStatus: detail.FurnishedStatus,
            Availability: detail.Availability,
            Perferredfor: detail.Perferredfor,
            ageofconstruction: detail.ageofconstruction,
            info: detail.info,
            location: detail.location,
            images: detail.images.map(image => `data:${image.contentType};base64,${image.data.toString('base64')}`),
        };
        res.send(formattedDetail);
    } catch (error) {
        res.status(500).send({ error: 'Failed to retrieve detail' });
    }
});

// Search endpoint
app.get('/search', async (req, res) => {
    try {
        let { name, price, description } = req.query;
        let searchCriteria = {};

        if (name) {
            searchCriteria.name = new RegExp(name, 'i'); // Case insensitive regex search
        }

        if (price) {
            searchCriteria.price = price;
        }

        if (description) {
            searchCriteria.description = new RegExp(description, 'i'); // Case insensitive regex search
        }

        let results = await Detail.find(searchCriteria);
        res.send(results);
    } catch (error) {
        res.status(500).send({ error: 'Failed to search details' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
