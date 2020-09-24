const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Exercise type is Required"
            },
            name: {
                type: String,
                trim: true,
                required: "Name type is Required"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number

            },
            reps: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Duration type is Required"
            },
            distance: {
                type: Number
            },

        }

    ]


},
{
    toJSON: {
        virtuals: true,
    }
        
});

WorkoutSchema.virtual("totalDuration".get(function() {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration  
    }, 0)
}))

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;