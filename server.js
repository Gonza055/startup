const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve your static files from 'public' directory

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
app.get('/api/greet', (req, res) => {
  res.send('Hello, World!');
});
