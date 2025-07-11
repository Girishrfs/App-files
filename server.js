
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const businessesRoutes = require('./routes/businesses');
const productsRoutes = require('./routes/products');
const adsRoutes = require('./routes/ads');
const chatbotRoutes = require('./routes/chatbot');
const adminRoutes = require('./routes/admin');

app.use('/api/businesses', businessesRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/ads', adsRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
