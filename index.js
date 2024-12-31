const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample API endpoint
app.get('/api/events', (req, res) => {
  res.json([
    { id: 1, title: 'Meeting', start: '2024-12-28T10:00:00', end: '2024-12-28T11:00:00' },
    { id: 2, title: 'Conference', start: '2024-12-29T13:00:00', end: '2024-12-29T15:00:00' }
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
