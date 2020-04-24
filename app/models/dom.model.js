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
        asks: {
            type: Sequelize.JSON
        },
        bids: {
            type: Sequelize.JSON
        }
    });

/*    Dom.associate = function({Ask, Bid}) {
        this.hasMany(Ask, {
            foreignKey: 'domId',
            as: 'asks'
        });

        this.hasMany(Bid, {
            foreignKey: 'domId',
            as: 'bids'
        });
    };*/

    return Dom;
};
