const PORT = process.env.PORT || 3300;
const express = require(`express`);
const app = express();
const db = require(`./models`)

//Public to ensure app & CSS are linked properly
app.use(express.static(`public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require(`express-handlebars`);

//Set Up for handlebars
app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set(`view engine`, `handlebars`);

//Importing the routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//Give the server access to the routes
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
