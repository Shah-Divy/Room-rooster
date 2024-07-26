// const express = require('express');
// const cors = require("cors");
// const corsConfig = {
//     origin: "*",
//     Credential: true,
//     methods : ["GET", "POST", "PUT", "DELETE"],
// };
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const multer = require('multer');
// require('./db/config');
// const User = require("./db/User");
// const Detail = require("./db/Detail");

// dotenv.config();


// const app = express();

// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));
// app.options("", cors(corsConfig));
// app.use(cors(corsConfig));

// // Configure multer for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ 
//     storage: storage,
//     limits: { fileSize: 10 * 1024 * 1024 } // 10 MB file size limit
// });

// app.get('/', (req, res) => {
//     res.send('Products API running');
// });

// app.get('/home', (req, res) => {
//     res.send('API running');
// });

// // api for the Sign-up
// app.post("/register", async (req, resp) => {
//     try {
//         let user = new User(req.body);
//         let result = await user.save();
//         result = result.toObject();
//         delete result.password;
//         resp.send(result);
//     } catch (error) {
//         resp.status(500).send({ error: 'Failed to register user' });
//     }
// });


// // api for the login
// app.post("/login", async (req, resp) => {
//     try {
//         if (req.body.password && req.body.email) {
//             let user = await User.findOne(req.body).select("-password");
//             if (user) {
//                 resp.send(user);
//             } else {
//                 resp.status(404).send({ result: 'No User Found' });
//             }
//         } else {
//             resp.status(400).send({ result: 'Email and password are required' });
//         }
//     } catch (error) {
//         resp.status(500).send({ error: 'Failed to login user' });
//     }
// });

// //api to insert all the details 
// app.post("/details", upload.single('image'), async (req, resp) => {
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
//             // deposit: req.body.deposit,
//             FurnishedStatus: req.body.FurnishedStatus,
//             // Availability: req.body.Availability,
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
//         resp.status(500).send({ error: 'Failed to save detail' });
//     }
// });

// //api to retrive all the details from the db
// app.get("/details", async (req, resp) => {
//     try {
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
//         resp.status(500).send({ error: 'Failed to retrieve details' });
//     }
// });

// // api for the particular details from the id
// app.get("/details/:id", async (req, resp) => {
//     try {
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
//             // deposit: detail.deposit,
//             FurnishedStatus: detail.FurnishedStatus,
//             // Availability: detail.Availability,
//             Perferredfor: detail.Perferredfor,
//             ageofconstruction: detail.ageofconstruction,
//             info: detail.info,
//             image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null
//         };
//         resp.send(formattedDetail);
//     } catch (error) {
//         resp.status(500).send({ error: 'Failed to retrieve detail' });
//     }
// });

// // Search endpoint
// app.get("/search", async (req, resp) => {
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
//         resp.send(results);
//     } catch (error) {
//         resp.status(500).send({ error: 'Failed to search details' });
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
const bcrypt = require('bcrypt');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsConfig));

// Middleware setup
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Database connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(`MongoDB connection error: ${err.message}`));

// Models
const User = require("./db/User");
const Detail = require("./db/Detail");

// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10 MB file size limit
});

// Routes
app.get('/', (req, res) => {
    res.send('Products API running');
});

app.get('/home', (req, res) => {
    res.send('API running');
});

app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);
    } catch (error) {
        console.error(`Error registering user: ${error.message}`);
        res.status(500).send({ error: 'Failed to register user' });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const user = await User.findOne({ email });
            if (user && await bcrypt.compare(password, user.password)) {
                res.send(user);
            } else {
                res.status(404).send({ result: 'No User Found' });
            }
        } else {
            res.status(400).send({ result: 'Email and password are required' });
        }
    } catch (error) {
        console.error(`Error logging in user: ${error.message}`);
        res.status(500).send({ error: 'Failed to login user' });
    }
});

app.post("/details", upload.single('image'), async (req, res) => {
    try {
        const detail = new Detail({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            phoneNumber: req.body.phoneNumber,
            sqft: req.body.sqft,
            bed: req.body.bed,
            bath: req.body.bath,
            ownername: req.body.ownername,
            FurnishedStatus: req.body.FurnishedStatus,
            Perferredfor: req.body.Perferredfor,
            ageofconstruction: req.body.ageofconstruction,
            info: req.body.info,
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });
        const result = await detail.save();
        res.send(result);
    } catch (error) {
        console.error(`Error saving detail: ${error.message}`);
        res.status(500).send({ error: 'Failed to save detail' });
    }
});

app.get("/details", async (req, res) => {
    try {
        const details = await Detail.find();
        const formattedDetails = details.map(detail => ({
            _id: detail._id,
            name: detail.name,
            price: detail.price,
            description: detail.description,
            phoneNumber: detail.phoneNumber,
            sqft: detail.sqft,
            bed: detail.bed,
            bath: detail.bath,
            image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null
        }));
        res.send(formattedDetails);
    } catch (error) {
        console.error(`Error retrieving details: ${error.message}`);
        res.status(500).send({ error: 'Failed to retrieve details' });
    }
});

app.get("/details/:id", async (req, res) => {
    try {
        const detail = await Detail.findById(req.params.id);
        if (!detail) {
            return res.status(404).send({ error: 'Detail not found' });
        }
        const formattedDetail = {
            _id: detail._id,
            name: detail.name,
            price: detail.price,
            description: detail.description,
            phoneNumber: detail.phoneNumber,
            sqft: detail.sqft,
            bed: detail.bed,
            bath: detail.bath,
            ownername: detail.ownername,
            FurnishedStatus: detail.FurnishedStatus,
            Perferredfor: detail.Perferredfor,
            ageofconstruction: detail.ageofconstruction,
            info: detail.info,
            image: detail.image ? `data:${detail.image.contentType};base64,${detail.image.data.toString('base64')}` : null
        };
        res.send(formattedDetail);
    } catch (error) {
        console.error(`Error retrieving detail: ${error.message}`);
        res.status(500).send({ error: 'Failed to retrieve detail' });
    }
});

app.get("/search", async (req, res) => {
    try {
        const { name, price, description } = req.query;
        const searchCriteria = {};

        if (name) {
            searchCriteria.name = new RegExp(name, 'i');
        }

        if (price) {
            searchCriteria.price = price;
        }

        if (description) {
            searchCriteria.description = new RegExp(description, 'i');
        }

        const results = await Detail.find(searchCriteria);
        res.send(results);
    } catch (error) {
        console.error(`Error searching details: ${error.message}`);
        res.status(500).send({ error: 'Failed to search details' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
