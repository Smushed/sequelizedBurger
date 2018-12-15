module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 255]
            }
        }
    });

    Customer.associate = (models) => {
        // Associating Customer with Posts
        // When an Customer is deleted, also delete any associated Posts
        Customer.hasMany(models.Burger, {
            onDelete: "cascade"
        });
    };

    return Customer;
};
