// filepath: /c:/Users/user/Documents/Dynamic_link_preview_generator/server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5005;

app.use(cors());
app.use(bodyParser.json());

app.post('/preview', (req, res) => {
  const { url } = req.body;

  // Simulate fetching preview data
  const previewData = {
    title: 'Example Title',
    description: 'Example Description',
    image: 'https://via.placeholder.com/150',
  };

  res.json(previewData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});