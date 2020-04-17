module.exports = (sequelize, Sequelize) => {

    return sequelize.define("uid", {
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