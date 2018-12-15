var db = require("../models");

module.exports = app => {
    app.post(`/api/burger`, async (req, res) => {
        const inputBurger = req.body;
        const newBurger = await db.Burger.create(inputBurger);
        res.json(newBurger);
    });

    //The put is only to mark devoured as true because in this app a burger can only be eaten
    app.put(`/api/eat`, async (req, res) => {
        const eatenBurger = await db.Burger.update({
            devoured: true,
            CustomerId: req.body.CustomerId,
            customer_name: req.body.customer_name
        }, {
                where: {
                    id: req.body.id
                }
            });
        res.json(eatenBurger);
    });

    //Route for the customer when they eat the burger
    app.post(`/api/customer`, async (req, res) => {
        const newCustomer = req.body;
        const updatedCustomer = await db.Customer.create(newCustomer);
        res.json(updatedCustomer);
    });

    //Get routes for all the API data
    app.get(`/api/burger`, async (req, res) => {
        const data = await db.Burger.findAll({});
        res.json(data);
    });
    app.get(`/api/customer`, async (req, res) => {
        const data = await db.Customer.findAll({});
        res.json(data);
    });
};