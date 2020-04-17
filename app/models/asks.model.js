module.exports = (sequelize, Sequelize) => {

    return sequelize.define("asks", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
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

};