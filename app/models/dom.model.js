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
        ticker: {
            type: Sequelize.STRING
        }
    });

    Dom.associate = function({Ask, Bid}) {
        this.hasMany(Ask, {
            foreignKey: 'domId',
            as: 'asks'
        });

        this.hasMany(Bid, {
            foreignKey: 'domId',
            as: 'bids'
        });
    };

    return Dom;
};
