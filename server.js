const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
app.get('/api/greet', (req, res) => {
  res.send('Hello, World!');
});

const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the StudyBuddy Service!');
});
