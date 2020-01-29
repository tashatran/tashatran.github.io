const express= require("express")
const router= express.Router()
const db= require("../models")

//GET ALL workouts
router.get("/workouts", function(req,res){
    db.Workout.find().then(
        resp=>{
        console.log(resp)
        res.json(resp)
    }
    )
});



module.exports= router;