
const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

router.get('/', async (req, res) => {
    try {
        const businesses = await Business.find();
        res.json(businesses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
