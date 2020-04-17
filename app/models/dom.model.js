module.exports = (sequelize, Sequelize) => {

    const Dom = sequelize.define("dom", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hash: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        ticker: {
            type: Sequelize.STRING
        }
    });

    Dom.hasMany(require('./bids.model')(sequelize, Sequelize));
    Dom.hasMany(require("./asks.model")(sequelize, Sequelize));

    return Dom;


};