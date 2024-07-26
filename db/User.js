// const mongoose= require('mongoose');

// const userScheme= new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// });

// module.exports= mongoose.model("names",userScheme);


// const { type } = require('@testing-library/user-event/dist/cjs/utility/type.js');
// const mongoose = require('mongoose');

// const nameSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });


// const User = mongoose.model('names', nameSchema);

// module.exports = Detail;

 const { type } = require('@testing-library/user-event/dist/cjs/utility/type.js');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('names', userSchema);

module.exports = User;
