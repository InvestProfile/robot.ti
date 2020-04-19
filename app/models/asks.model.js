module.exports = (sequelize, Sequelize) => {

    const Ask = sequelize.define("Ask", {
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

    Ask.associate = function({Dom}) {
        this.belongsTo(Dom, {
            foreignKey: 'domId',
            as: 'dom'
        });
    };

    //Asks.belongsTo(require("./dom.model")(sequelize, Sequelize), {foreignKey: 'dom_id', targetKey: 'id'});

    return Ask;

};
