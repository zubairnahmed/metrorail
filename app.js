const Station = require('./Classes/station');
const Train = require('./Classes/train')
const db = require('./Database/database');

// User: add code here


setTimeout( () => {
  db.destroy();
}, 2000);
