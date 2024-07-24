const mongoose= require('mongoose');

const userScheme= new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports= mongoose.model("names",userScheme);

// module.exports 


// const Detail = mongoose.model('Detail', detailSchema);

// module.exports = Detail;