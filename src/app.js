import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// MongoDB connection setup
const mongoURI = process.env.MONGO_URI || 'your-default-mongo-uri';
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process on failure
  });

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || '*' })); // Allow only specific client origin
app.use(bodyParser.json());

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/admin', adminRoutes); // Prefix for admin routes
app.use('/api/user', userRoutes);   // Prefix for user routes

// 404 route for unmatched paths
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack || err.message);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
