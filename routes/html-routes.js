var db = require("../models");

module.exports = app => {
    //Gets the page to load and queries the database to get the burgers to display
    app.get(`/`, async (req, res) => {
        const data = await db.Burger.findAll({});
        const burgerObject = { burgers: data }
        res.render(`index`, burgerObject);
    });
};