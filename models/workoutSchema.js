const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
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
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        weight: {
            type: Number
        },
        distance: {
            type: Number
        },
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;