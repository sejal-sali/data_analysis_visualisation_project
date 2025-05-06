const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/data', (req, res) => {
  const data = require('./data/data.json');
  res.json(data);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
