const db = require("../models");

module.exports = function (app) {


    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(newWorkout => {
                res.json(newWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        db.Workout.find()
            .then( workouts => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            });
    });


    app.post("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate({_id: params.id}, {$push: {excercises: req.body}}, { new: true })
            .then(update => {
                res.json(update);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts/range", (req, res) => {
        db.Workout.create({})
            .then(workoutStats => {
                res.json(workoutStats);
            })
            .catch(err => {
                res.json(err);
            });
    });


    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    });


}