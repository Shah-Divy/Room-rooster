// const express = require('express');
// const cors = require("cors");
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// require('./db/config');
// const User = require("./db/User");
// const Detail = require("./db/Detail");  // Import the new model

// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Products API running');
// });

// app.get('/home', (req, res) => {
//     res.send('API running');
// });

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

// // New route for adding details
// app.post("/details", async (req, resp) => {
//     try {
//         let detail = new Detail(req.body);
//         let result = await detail.save();
//         resp.send(result);
//     } catch (error) {
//         resp.status(500).send({ error: 'Failed to save detail' });
//     }
// });

// app.get("/details", async (req, resp) => {
//     try {
//         let details = await Detail.find();
//         resp.send(details);
//     } catch (error) {
//         resp.status(500).send({ error: 'Failed to retrieve details' });
//     }
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
require('./db/config');
const User = require("./db/User");
const Detail = require("./db/Detail");  // Import the new model

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

// New route for adding details with image upload
app.post("/details", upload.single('image'), async (req, resp) => {
    try {
        let detail = new Detail({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
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

// Route to retrieve an image by ID
app.get("/details/:id/image", async (req, resp) => {
    try {
        let detail = await Detail.findById(req.params.id);
        if (detail && detail.image && detail.image.data) {
            resp.set("Content-Type", detail.image.contentType);
            resp.send(detail.image.data);
        } else {
            resp.status(404).send({ error: 'Image not found' });
        }
    } catch (error) {
        resp.status(500).send({ error: 'Failed to retrieve image' });
    }
});

app.get("/details", async (req, resp) => {
    try {
        let details = await Detail.find();
        resp.send(details);
    } catch (error) {
        resp.status(500).send({ error: 'Failed to retrieve details' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
