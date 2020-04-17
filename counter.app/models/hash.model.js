exports.initHash = (db) => {

    return db.sequelize.define('hash', {
        id: {
            type: db.sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hash: {
            type: db.sequelize.STRING
        }
    })

};