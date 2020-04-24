module.exports = (sequelize, Sequelize) => {

    const Dom = sequelize.define("Dom", {
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
        iterator: {
            type: Sequelize.INTEGER
        },
        ticker: {
            type: Sequelize.STRING
        },
        orderBookJSON: {
            type: Sequelize.JSON
        },
        figi: {
            type: Sequelize.STRING
        },
        depth: {
            type: Sequelize.INTEGER
        },
        tradeStatus: {
            type: Sequelize.STRING
        },
        minPriceIncrement: {
            type: Sequelize.INTEGER
        },
        lastPrice: {
            type: Sequelize.INTEGER
        },
        closePrice: {
            type: Sequelize.INTEGER
        },
        limitUp: {
            type: Sequelize.INTEGER
        },
        limitDown: {
            type: Sequelize.INTEGER
        },
        bidsListJSON: {
            type: Sequelize.JSON
        },
        asksListJSON: {
            type: Sequelize.JSON
        }
    });

    return Dom;
};
