module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 255]
            }
        }
    });
    Burger.associate = (models) => {
        // We're saying that a Burger should belong to an Author
        // A Burger can't be created without an Author due to the foreign key constraint
        Burger.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: true
            }
        });
    };
    return Burger;
};
