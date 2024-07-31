// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const multer = require('multer');
// require('./db/config');
// const User = require('./db/User');
// const Detail = require('./db/Detail');

// dotenv.config();

// const app = express();

// const corsConfig = {
//     origin: 'https://room-rooster-kappa.vercel.app',
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
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

// // API for Sign-up
// app.post('/register', async (req, res) => {
//     try {
//         let user = new User(req.body);
//         let result = await user.save();
//         result = result.toObject();
//         delete result.password;
//         res.send(result);
//     } catch (error) {
//         res.status(500).send({ error: 'Failed to register user' });
//     }
// });

// // API for login
// app.post('/login', async (req, res) => {
//     try {
//         if (req.body.password && req.body.email) {
//             let user = await User.findOne(req.body).select('-password');
//             if (user) {
//                 res.send(user);
//             } else {
//                 res.status(404).send({ result: 'No User Found' });
//             }
//         } else {
//             res.status(400).send({ result: 'Email and password are required' });
//         }
//     } catch (error) {
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





// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const multer = require('multer');
// require('./db/config');
// const User = require('./db/User');
// const Detail = require('./db/Detail');

// dotenv.config();

// const app = express();

// const corsConfig = {
//     origin: 'https://room-rooster-kappa.vercel.app',
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     preflightContinue: false,
//     optionsSuccessStatus: 204,
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

// // Signup route
// app.post('/signup', async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Create a new user
//         const newUser = new User({
//             name,
//             email,
//             password,
//         });

//         // Save the user to the database
//         await newUser.save();

//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating user', error });
//     }
// });

// // Login route
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Check if the user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         // Check if the provided password matches the stored password
//         if (password !== user.password) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         res.status(200).json({ message: 'Login successful' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error logging in', error });
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
const User = require('./db/User');
const Detail = require('./db/Detail');

dotenv.config();

const app = express();

const corsConfig = {
    origin: 'https://room-rooster-kappa.vercel.app', // Ensure this matches your frontend URL
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
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
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ name: user.name, email: user.email });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// User Login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).json({ name: user.name, email: user.email });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
});

// API to insert all the details
app.post('/details', upload.single('image'), async (req, res) => {
    try {
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
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype,
            },
        });
        let result = await detail.save();
        res.send(result);
    } catch (error) {
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
            image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null,
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
            image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null,
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
