exports.getDBConfig = () => {

    const fs = require('fs');
    const path = require('path');
    const file = path.join(__dirname, './', 'db.config.json');
    const json = fs.readFileSync(file);
    const settings = JSON.parse(json);

    const Sequelize = require("sequelize");
    const sequelize = new Sequelize(settings.name, settings.user, settings.password, {
        host:               settings.host,
        dialect:            settings.dialect,
        operatorsAliases:   false,
        pool: {
            max:            settings.pool.max,
            min:            settings.pool.min,
            acquire:        settings.pool.acquire,
            idle:           settings.pool.idle
        }
    });

    return {
        Sequalize,
        sequelize
    }

};