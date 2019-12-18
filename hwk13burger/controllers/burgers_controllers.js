var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(data){
        if(data){
        res.render('index', {burgers:data})
        }
        else res.status(404).end()
    })
})
router.post("/", function(req,res){//api route
    //unpack the data from the req.body
    burger.grill(function(data){
        if(data){
        res.json(data)
        }
        else res.status(404).end()
    })
})
module.exports= router