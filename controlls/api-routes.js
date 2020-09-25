const router = require("express").Router()
const Workout = require("../models/workoutSchema")

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", ({body}, res) => {
    Workout.create({body})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then(update => {
            res.json(update);
        })
        .catch(err => {
            res.json(err);
        });
});



router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;