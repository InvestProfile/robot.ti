module.exports = (sequelize, Sequelize) => {

    const OrderBook = sequelize.define("OrderBook", {
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
        orderBook: {
            type: Sequelize.JSON
        }
    });
    return OrderBook;
};