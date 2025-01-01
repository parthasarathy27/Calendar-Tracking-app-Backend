import app from './app.js'; // Import the app instance
import dotenv from 'dotenv'; // Import dotenv for environment variables
import { createServer } from 'http';

dotenv.config(); // Load environment variables from .env file (only for local development)

// Create a serverless handler using Express app
const handler = (req, res) => {
  app(req, res);
};

// Export the handler function for Vercel to invoke
export default handler;
