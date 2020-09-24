const db = require("../models");

module.exports = function (app) {

    // new workout
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });
    //get workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });


    app.post("/api/workouts/:id", (req, res) => {
        db.User.findOneAndUpdate({_id: req.params.id}, {$inc: {duration: req.body.duration}, $push: {excercises: req.body}}, { new: true })
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });




}