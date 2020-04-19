const fs = require('fs');
const path = require('path');

const db = require('./sequelize');

fs.readdirSync(__dirname).filter(f => !['index.js', 'sequelize.js'].includes(f) && /^\w+.model.js$/.test(f))
    .map(f => db.sequelize.import(path.join(__dirname, f))).forEach(f => db[f.name] = f);

Object.values(db).filter(v => v.hasOwnProperty('associate')).map(v => [v.associate(db), v][1]);


module.exports = db;
