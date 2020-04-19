module.exports = (sequelize, Sequelize) => {

    return sequelize.define("Uid", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hash: {
            type: Sequelize.STRING
        }
    });

};
