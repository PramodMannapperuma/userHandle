const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/user');
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoutes');
require('./config/database'); // Ensure the database connection is established

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use('/api/login', authRoutes)
app.use('/api/register', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});