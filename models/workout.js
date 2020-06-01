const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        required: "Enter one of the exercise types"
      },

      name: {
        type: String,
        required: "Enter the name of the exercise"
      },

      duration: {
        type: Number,
        required: "Enter how long the exercise will take"
      },

      distance: {
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
    },
  ],
  
},
{
  toJSON: {
    virtuals: true
  }
}
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
