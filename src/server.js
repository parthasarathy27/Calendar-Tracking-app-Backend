import app from './app.js';  // Import the app instance
import dotenv from 'dotenv';  // Import dotenv for environment variables

dotenv.config();  // Load environment variables

const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
