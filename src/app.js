import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';  // Import Mongoose
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// MongoDB connection setup with MongoDB Atlas URI
const mongoURI = 'mongodb+srv://gopalsarathyvanitha:26mvRbG2Tzg26MWp@cluster-calender.7pkex.mongodb.net/your-database-name?retryWrites=true&w=majority'; // Use your MongoDB Atlas URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define routes more specifically for user and admin
app.use('/api/admin', adminRoutes); // Prefix for admin routes
app.use('/api/user', userRoutes);   // Prefix for user routes

// 404 route if no route matches
app.use((req, res) => res.status(404).send('Route not found'));

export default app;
