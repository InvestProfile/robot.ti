exports.getModels = () => {

    const db = require('../config/db.config').getDBConfig();

    db.hash = require('./hash.model').initHash(db);




    db.sequelize.sync({ force: true }).then(()=> {
        console.log('Drop and re-sync db.')
    });

    return db;

};
