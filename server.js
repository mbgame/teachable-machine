const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// serve the index.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// serve the model and metadata files for the /my_model/ URL
app.get('/my_model/*', (req, res) => {
  res.sendFile(path.join(__dirname, req.url));
});

// serve other static files (e.g. CSS, JS) for the remaining URLs
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
