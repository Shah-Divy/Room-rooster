const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
require('./db/config');
const User = require("./db/User");
const Detail = require("./db/Detail");

dotenv.config();

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10 MB file size limit
});

app.get('/', (req, res) => {
    res.send('Products API running');
});

app.get('/home', (req, res) => {
    res.send('API running');
});

// api for the Sign-up
app.post("/register", async (req, resp) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        resp.send(result);
    } catch (error) {
        resp.status(500).send({ error: 'Failed to register user' });
    }
});


// api for the login
app.post("/login", async (req, resp) => {
    try {
        if (req.body.password && req.body.email) {
            let user = await User.findOne(req.body).select("-password");
            if (user) {
                resp.send(user);
            } else {
                resp.status(404).send({ result: 'No User Found' });
            }
        } else {
            resp.status(400).send({ result: 'Email and password are required' });
        }
    } catch (error) {
        resp.status(500).send({ error: 'Failed to login user' });
    }
});

//api to insert all the details 
app.post("/details", upload.single('image'), async (req, resp) => {
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
                contentType: req.file.mimetype
            }
        });
        let result = await detail.save();
        resp.send(result);
    } catch (error) {
        resp.status(500).send({ error: 'Failed to save detail' });
    }
});

//api to retrive all the details from the db
app.get("/details", async (req, resp) => {
    try {
        let details = await Detail.find();
        let formattedDetails = details.map(detail => {
            return {
                _id: detail._id,
                name: detail.name,
                price: detail.price,
                description: detail.description,
                phoneNumber: detail.phoneNumber,
                sqft: detail.sqft,
                bed: detail.bed,
                bath: detail.bath,
                image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null
            };
        });
        resp.send(formattedDetails);
    } catch (error) {
        resp.status(500).send({ error: 'Failed to retrieve details' });
    }
});

// api for the particular details from the id
app.get("/details/:id", async (req, resp) => {
    try {
        let detail = await Detail.findById(req.params.id);
        if (!detail) {
            return resp.status(404).send({ error: 'Detail not found' });
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
            image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null
        };
        resp.send(formattedDetail);
    } catch (error) {
        resp.status(500).send({ error: 'Failed to retrieve detail' });
    }
});

// Search endpoint
app.get("/search", async (req, resp) => {
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
        resp.send(results);
    } catch (error) {
        resp.status(500).send({ error: 'Failed to search details' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const User = require('./db/User');
// const Detail = require('./db/Detail');

// dotenv.config();

// const app = express();

// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));
// app.use(cors());

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

// app.post('/register', async (req, resp) => {
//     try {
//         console.log('Register endpoint hit with data:', req.body);
//         let user = new User(req.body);
//         let result = await user.save();
//         result = result.toObject();
//         delete result.password;
//         resp.send(result);
//     } catch (error) {
//         console.error('Error during user registration:', error);
//         resp.status(500).send({ error: 'Failed to register user' });
//     }
// });

// app.post('/login', async (req, resp) => {
//     try {
//         console.log('Login endpoint hit with data:', req.body);
//         if (req.body.password && req.body.email) {
//             let user = await User.findOne(req.body).select('-password');
//             if (user) {
//                 resp.send(user);
//             } else {
//                 resp.status(404).send({ result: 'No User Found' });
//             }
//         } else {
//             resp.status(400).send({ result: 'Email and password are required' });
//         }
//     } catch (error) {
//         console.error('Error during user login:', error);
//         resp.status(500).send({ error: 'Failed to login user' });
//     }
// });

// app.post('/details', upload.single('image'), async (req, resp) => {
//     try {
//         console.log('Details endpoint hit with data:', req.body);
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
//                 contentType: req.file.mimetype
//             }
//         });
//         let result = await detail.save();
//         resp.send(result);
//     } catch (error) {
//         console.error('Error during saving detail:', error);
//         resp.status(500).send({ error: 'Failed to save detail' });
//     }
// });

// app.get('/details', async (req, resp) => {
//     try {
//         console.log('Get all details endpoint hit');
//         let details = await Detail.find();
//         let formattedDetails = details.map(detail => {
//             return {
//                 _id: detail._id,
//                 name: detail.name,
//                 price: detail.price,
//                 description: detail.description,
//                 phoneNumber: detail.phoneNumber,
//                 sqft: detail.sqft,
//                 bed: detail.bed,
//                 bath: detail.bath,
//                 image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null
//             };
//         });
//         resp.send(formattedDetails);
//     } catch (error) {
//         console.error('Error during retrieving details:', error);
//         resp.status(500).send({ error: 'Failed to retrieve details' });
//     }
// });

// app.get('/details/:id', async (req, resp) => {
//     try {
//         console.log('Get detail by ID endpoint hit with ID:', req.params.id);
//         let detail = await Detail.findById(req.params.id);
//         if (!detail) {
//             return resp.status(404).send({ error: 'Detail not found' });
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
//             image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null
//         };
//         resp.send(formattedDetail);
//     } catch (error) {
//         console.error('Error during retrieving detail:', error);
//         resp.status(500).send({ error: 'Failed to retrieve detail' });
//     }
// });

// app.get('/search', async (req, resp) => {
//     try {
//         console.log('Search endpoint hit with query:', req.query);
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
//         resp.send(results);
//     } catch (error) {
//         console.error('Error during search:', error);
//         resp.status(500).send({ error: 'Failed to search details' });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
