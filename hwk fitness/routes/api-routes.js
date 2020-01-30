const express= require("express")
const router= express.Router()
const db = require("../models")

//GET ALL workouts fetch("/api/workouts");
router.get("/workouts", function(req,res){
    db.Workout.find().then(
        resp=>{
        console.log(resp)
        res.json(resp)
    }
    )
});


//fetch(`/api/workouts/range`);
router.post("/workouts/range", (req, res) => {
  db.Workout.find(req)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//fetch("/api/workouts/" + id, update
router.put("/workouts/:id", ({ body,params }, res) => {
  console.log(body)
  // req.params.id
   db.Workout.findByIdAndUpdate(params.id, 
    {$push: {exercise: body}},
    {new: true, runValidators:true}
    )
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//create fetch("/api/workouts",

router.post("/workouts", (req, res) => {
  console.log('here')
    db.Workout.create({
      day: new Date().setDate(new Date().getDate()),
      exercises: []
    })
       .then(dbWorkouts => {
         console.log(dbWorkouts)
         res.json(dbWorkouts);
       })
       .catch(err => {
         res.status(400).json(err);
       });
   });

   
module.exports = router;