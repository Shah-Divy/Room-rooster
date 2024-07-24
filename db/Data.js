const mongoose= require('mongoose');

const userScheme= new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const Data = mongoose.model("Data",DataScheme);

module.exports = Data


// const Detail = mongoose.model('Detail', detailSchema);

// module.exports = Detail;