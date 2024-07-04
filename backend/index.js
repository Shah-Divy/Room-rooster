const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require("./db/User");
const { Await } = require('react-router-dom');


const app = express();

app.use(express.json());
app.use(cors());

app.post("/registers",async (req,resp)=>{
     let user= new User(req.body);
     let result =await user.save();
     result = result.toObject();
     delete result.password;
     resp.send(result);
});

app.post("/logins", async (req,resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if(user)
     {
        resp.send(user)
     }else{
        resp.send({result : 'No User Found'})
     }
    } else {
        resp.send({result : 'No User Found'})
    }

})

app.listen(5000);