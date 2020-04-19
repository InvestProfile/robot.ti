const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.uid = require("./uid.model")(sequelize, Sequelize);
db.dom = require("./dom.model")(sequelize, Sequelize);
db.bids = require("./bids.model")(sequelize, Sequelize);
db.asks = require("./asks.model")(sequelize, Sequelize);

db.dom.hasMany(require('./bids.model')(sequelize, Sequelize));
db.dom.hasMany(require("./asks.model")(sequelize, Sequelize));

//TODO разобраться с этим=)
require('./dom');


module.exports = db;