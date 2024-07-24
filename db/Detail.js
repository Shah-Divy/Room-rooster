

const { type } = require('@testing-library/user-event/dist/type');
const { request } = require('express');
const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    sqft: {
        type: Number,
        required: true
    },
    bed: {
        type: Number,
        required: true
    },
    bath: {
        type: Number,
        required: true
    }
});

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;



// const mongoose = require('mongoose');

// const detailSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     image: {
//         data: Buffer,
//         contentType: String
//     },
//     phoneNumber: {
//         type: String,
//         required: true
//     },
//     sqft: {
//         type: Number,
//         required: true
//     },
//     bed: {
//         type: Number,
//         required: true
//     },
//     bath: {
//         type: Number,
//         required: true
//     }
// });

// const Detail = mongoose.model('Detail', detailSchema);

// module.exports = Detail;
