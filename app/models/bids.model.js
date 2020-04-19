module.exports = (sequelize, Sequelize) => {

    const Bid =  sequelize.define("Bid", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        /*dom_id: {
            type: Sequelize.INTEGER,
            foreignKey: true
        },*/
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

    Bid.associate = function({Dom}) {
        this.belongsTo(Dom, {
            foreignKey: 'domId',
            as: 'dom'
        });
    };

    //Bid.belongsTo(require("./dom.model")(sequelize, Sequelize), {foreignKey: 'dom_id', targetKey: 'id'});

    return Bid;

};
