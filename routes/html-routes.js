var db = require("../models");

module.exports = app => {
    //Gets the page to load and queries the database to get the burgers to display
    app.get(`/`, async (req, res) => {
        const burgerData = await db.Burger.findAll({});
        const customerData = await db.Customer.findAll({});
        const burgerObject = {
            burgers: burgerData,
            customers: customerData
        }
        res.render(`index`, burgerObject);
    });
};