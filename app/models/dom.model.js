module.exports = (sequelize, Sequelize) => {

    const Dom = sequelize.define("dom", {
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
            }
        },
        {
            classMethods: {
                getTest: () => {
                    return 'test';
                }
            },
            instanceMethods: {
                gettest2: () => {
                    return [this.hash, this.ticker].join(' ')
                }
            }
        });

//Dom.build({hash: 'fdsfds', ticker: 'dfsdf'});

    /*    Dom.associate = (models) => {
            Dom.hasMany(models.asks, {
                foreignKey: 'domId',
                as: 'asks'
            });
        };*/

    return Dom;
};