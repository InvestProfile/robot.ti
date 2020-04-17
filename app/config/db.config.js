
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, './', 'db.config.json');
const json = fs.readFileSync(file);

module.exports = JSON.parse(json);