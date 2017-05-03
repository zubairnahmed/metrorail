const express = require('express');
const app = express();
const db = require('./Database/database');

const port = 3000;

app.listen(port, () => {
  console.log('Server is running on port', port);
});
