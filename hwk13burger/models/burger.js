var orm = require("../config/orm.js");

var burger= {
    all: function(cb){
        orm.selectAll("burgers", function(data){
            cb(data)
        })
    },
    grill: function(style,cb){
        orm.insertOne("burgers", "burger_name",style, function(data){
            cb(data)
        })
    }
}


module.exports = burger;