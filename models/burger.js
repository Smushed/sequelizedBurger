//This page is a bit redundant for now. However it is mainly pratice with module.exports and seperation of duties.
//With information flowing from controller to the ORM, this middleman file controls the data and passes it to the ORM in a way which can be easily used
const orm = require(`../config/orm`);

const burger = {
    //Displays all the data when the route / is called
    show: (callBack) => {
        orm.selectAll(`burgers`, data => {
            callBack(data)
        });
    },
    create: (columns, value, callBack) => {
        orm.insertOne(columns, value, (res) => {
            callBack(res);
        });
    },
    update: (condition, callBack) => {
        //Condition is already id = #
        //Only passing ID here because we are only updating it from not eaten to devoured
        orm.updateOne(condition, res => {
            callBack(res);
        });
    }
};

module.exports = burger;