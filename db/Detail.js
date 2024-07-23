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
//     }
// });

// const Detail = mongoose.model('Detail', detailSchema);

// module.exports = Detail;


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
    // ownername: {
    //     type: String,
    //     required: true     
    // },
    // deposit: {
    //     type: Number,
    //     required: true
    // },
    // FurnishedStatus: {
    //     type: String,
    //     required: true
    // },
    // Availability: {
    //     type: String,
    //     required: true
    // },
    // Perferredfor: {
    //     type: String,
    //     required: true
    // },
    // ageofconstruction: {
    //     type: Number,
    //     required: true
    // },
    // info: {
    //     type: String,
    //     required: true
    // }





});

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;
