module.exports = (sequelize, Sequelize) => {

    const Asks =  sequelize.define("asks", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dom_id: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        hash: {
            type: Sequelize.STRING
        },
        priceH: {
            type: Sequelize.INTEGER
        },
        priceL: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        }
    });

    //Asks.belongsTo(require("./dom.model")(sequelize, Sequelize), {foreignKey: 'dom_id', targetKey: 'id'});

    return Asks;

};