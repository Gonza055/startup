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

app.get('/', (req, res) => {
  res.send('Welcome to the StudyBuddy Service!');
});

const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

const dbUsername = 'cs260';
const dbPassword = 'cs260password';
const dbName = 'Gonza055';
const clusterUrl = 'gonza055.iginkev.mongodb.net';
const mongoURI = `mongodb+srv://${dbUsername}:${encodeURIComponent(dbPassword)}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;

const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const database = client.db(dbName);
    const collection = database.collection('cs260collection');

    // Example: Insert a document
    const insertResult = await collection.insertOne({ name: "John Doe", email: "john@example.com" });
    console.log('Inserted document:', insertResult);

    // Example: Find documents
    const findResult = await collection.find({}).toArray();
    console.log('Found documents:', findResult);

    // Express routes would go here

  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.get('/api/greet', (req, res) => {
  res.send('Hello, World!');
});

app.get('/', (req, res) => {
  res.send('Welcome to the StudyBuddy Service!');
});

