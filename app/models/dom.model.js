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

//Dom.build({hash: 'fdsfds', ticker: 'dfsdf'});

    /*    Dom.associate = (models) => {
            Dom.hasMany(models.asks, {
                foreignKey: 'domId',
                as: 'asks'
            });
        };*/

    return Dom;
};
