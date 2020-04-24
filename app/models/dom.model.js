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
        ticker: {
            type: Sequelize.STRING
        },
        data: {
            type: Sequelize.JSON/*,
            get: () => {
                return JSON.parse(this.getDataValue('value'));
            },
            set: (value) => {
                this.setDataValue('value', JSON.stringify(value))
            }*/
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
