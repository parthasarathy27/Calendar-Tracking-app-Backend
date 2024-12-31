import app from './app.js'; // Import the app instance
import dotenv from 'dotenv'; // Import dotenv for environment variables

dotenv.config(); // Load environment variables from .env file (only for local development)

const port = process.env.PORT || 8080; // Use the PORT provided by Vercel

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.`);
    process.exit(1); // Exit if there's a port conflict
  } else {
    console.error('Server error:', err);
  }
});
