
const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: String,
    category: String,
    phone: String,
    address: String,
    rating: Number,
});

module.exports = mongoose.model('Business', businessSchema);
