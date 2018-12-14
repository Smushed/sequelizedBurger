//A simplier example of an ORM. This is our first exercise with it. This is where all the interaction with mySQL takes place
const connection = require(`./connection`);

const orm = {
    selectAll: (tableSearched, callBack) => {
        const queryString = `SELECT * FROM ${tableSearched};`
        connection.query(queryString, (err, data) => {
            if (err) { throw err };
            callBack(data);
        });
    },
    insertOne: (columns, value, callBack) => {
        //Columns comes in as an array which we then change to a string to query on
        const queryString = `INSERT INTO burgers (${columns.toString()}) VALUES (?, ?)`;
        connection.query(queryString, value, (err, result) => {
            if (err) { throw err };
            callBack(result);
        });
    },
    updateOne: (condition, callBack) => {
        //Condition already reads as id = #
        const queryString = `UPDATE burgers SET devoured = 1 WHERE ${condition}`;
        connection.query(queryString, (err, result) => {
            if (err) { throw err };
            callBack(result);
        });
    }
};

module.exports = orm;