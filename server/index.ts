import express from 'express';
require('dotenv').config();

const app = express();
const appId=process.env.PORT

// Route 1: Home page
app.get('/', (req, res) => {
  res.send(`Server running on PORT ${appId}`);
});

app.get('/app1', (req, res) => {
    res.send(`Server running on PORT ${appId}`);
});

app.get('/app2', (req, res) => {
    res.send(`Server running on PORT ${appId}`);
});

// Start the server
app.listen(appId, () => {
  console.log(`Server is listening on port ${appId}`);
});