import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// MongoDB connection setup using environment variables
const mongoURI = 'mongodb+srv://gopalsarathyvanitha:26mvRbG2Tzg26MWp@cluster-calender.7pkex.mongodb.net/your-database-name?retryWrites=true&w=majority'; // Use environment variable
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit the process on failure
    });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/admin', adminRoutes); // Prefix for admin routes
app.use('/api/user', userRoutes);   // Prefix for user routes

// 404 route for unmatched paths
app.use((req, res) => res.status(404).send('Route not found'));

export default app;
