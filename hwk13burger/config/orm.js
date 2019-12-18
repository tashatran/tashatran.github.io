// Import MySQL connection.
var connection = require("../config/connection.js");

var orm={
    selectAll: function(tableName, cb){
        connection.query(`SELECT * FROM ??`, [tableName], function(err, data){
            if(err)throw err
            else cb(data)
        })
    },
    insertOne: function(tableName, colName, value, cb){
        connection.query(`INSERT INTO ?? (?) VALUES (?)`, [tableName,colName,value], function(err, data){
            if(err)throw err
            else cb(data)
        })
    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;