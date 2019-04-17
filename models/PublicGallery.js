const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const PublicGallerySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    intro: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = PublicGallery = mongoose.model('publicGalleries', PublicGallerySchema);