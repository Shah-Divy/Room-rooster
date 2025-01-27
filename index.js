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

app.post('/post/details', upload.array('images', 5), async (req, res) => {
    try {
        const { name, price, description, phoneNumber, sqft, bed, bath, info, ownername, FurnishedStatus, Perferredfor, ageofconstruction, deposit, Availability, location } = req.body;

        // Process uploaded images
        let images = req.files.map(file => ({
            data: file.buffer,
            contentType: file.mimetype,
        }));

        // Create new Detail object
        let detail = new Detail({
            name,
            price,
            description,
            images,
            phoneNumber,
            sqft,
            bed,
            bath,
            info,
            ownername,
            FurnishedStatus,
            Perferredfor,
            ageofconstruction,
            deposit,
            Availability,
            location
        });

        // Save the detail object to the database
        let result = await detail.save();
        res.status(201).send(result);
    } catch (error) {
        console.error('Error creating new detail:', error);
        res.status(500).send({ error: 'Failed to create new detail' });
    }
});

// API to retrieve all the details from the DB
app.get('/get-all-data/details', async (req, res) => {
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
            ownername: detail.ownername,
            images: detail.images.map(image => `data:${image.contentType};base64,${image.data.toString('base64')}`),
        }));
        res.send(formattedDetails);
    } catch (error) {
        res.status(500).send({ error: 'Failed to retrieve details' });
    }
});

// API to retrieve a particular detail by ID
app.get('/get-data-idwise/details/:id', async (req, res) => {
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
        const { propertyType, location } = req.query;

        // Build the query object
        let query = {};
        if (propertyType) {
            query.name = propertyType;
        }
        if (location) {
            query.location = location;
        }

        // Execute the query
        let results = await Detail.find(query);
        let formattedResults = results.map((result) => ({
            _id: result._id,
            name: result.name,
            price: result.price,
            description: result.description,
            phoneNumber: result.phoneNumber,
            sqft: result.sqft,
            bed: result.bed,
            bath: result.bath,
            location: result.location,
            images: result.images.map(image => `data:${image.contentType};base64,${image.data.toString('base64')}`),
        }));

        res.send(formattedResults);
    } catch (error) {
        res.status(500).send({ error: 'Failed to perform search' });
    }
});

// API to delete the data from the database
app.delete('/delete/details/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedDetail = await Detail.findByIdAndDelete(id);

        if (!deletedDetail) {
            return res.status(404).send({ error: 'Detail not found' });
        }

        res.send({ message: 'Detail deleted successfully', deletedDetail });
    } catch (error) {
        console.error('Error deleting detail:', error);
        res.status(500).send({ error: 'Failed to delete detail' });
    }
});

// API to update a detail by ID
app.put('/update/details/:id', upload.array('images', 5), async (req, res) => {
    try {
        const id = req.params.id;
        const { name, price, description, phoneNumber, sqft, bed, bath, ownername, deposit, FurnishedStatus, Availability, Perferredfor, ageofconstruction, info, location } = req.body;

        // Prepare new image data if images are uploaded
        let images = req.files.map(file => ({
            data: file.buffer,
            contentType: file.mimetype,
        }));

        // Find and update the detail by ID
        let updatedDetail = await Detail.findByIdAndUpdate(
            id,
            {
                name,
                price,
                description,
                phoneNumber,
                sqft,
                bed,
                bath,
                ownername,
                deposit,
                FurnishedStatus,
                Availability,
                Perferredfor,
                ageofconstruction,
                info,
                location,
                ...(images.length > 0 && { images }), // Update images only if new images are uploaded
            },
            { new: true } // Return the updated document
        );

        if (!updatedDetail) {
            return res.status(404).send({ error: 'Detail not found' });
        }

        res.send(updatedDetail);
    } catch (error) {
        console.error('Error updating detail:', error);
        res.status(500).send({ error: 'Failed to update detail' });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
