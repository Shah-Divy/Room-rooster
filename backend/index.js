// const express = require('express');
// const cors = require("cors");
// const dotenv = require('dotenv');
// require('./db/config');
// const User = require("./db/User");
// const { Await } = require('react-router-dom');


// const app = express();

// app.use(express.json());
// app.use(cors());


// app.get('/', (req, res) => {
//     res.send('products api running');
// });

// app.get('/home', (req, res) => {
//     res.send('api running');
// });

// app.post("/Registers",async (req,resp)=>{
//      let user= new User(req.body);
//      let result =await user.save();
//      result = result.toObject();
//      delete result.password;
//      resp.send(result);
// });

// app.post("/logins", async (req,resp)=>{
//     console.log(req.body)
//     if(req.body.password && req.body.email) {
//     let user = await User.findOne(req.body).select("-password");
//     if(user)
//      {
//         resp.send(user)
//      }else{
//         resp.send({result : 'No User Found'})
//      }
//     } else {
//         resp.send({result : 'No User Found'})
//     }

// })

// app.listen(5000);


const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
require('./db/config');
const User = require("./db/User");
const Detail = require("./db/Detail");  // Import the new model

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

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

// New route for adding details
app.post("/details", async (req, resp) => {
    try {
        let detail = new Detail(req.body);
        let result = await detail.save();
        resp.send(result);
    } catch (error) {
        resp.status(500).send({ error: 'Failed to save detail' });
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
