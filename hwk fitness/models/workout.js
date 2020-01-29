const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // CODE HERE
  day: {
    type: Date,
    trim: true,
    default: Date.now
  },

  
  // exercises: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Exercise"
  //   }
  // ]
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        //allowNull: true
      },
    
      name: {
          type: String,
          trim: true,
          required: true
          
      },
    
      duration: {
        type: Number,
       
        
    },
    
    weight: {
        type: Number,
       
    },
    
    reps: {
        type: Number,
        
        
    },
    
    sets: {
        type: Number,
       
       
    },
    
    distance: {
        type: Number,
       
        
    },
    }
  ]
 


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;