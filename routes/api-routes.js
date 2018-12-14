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
            devoured: true
        }, {
                where: {
                    id: req.body.id
                }
            });
        res.json(eatenBurger);
    });
};