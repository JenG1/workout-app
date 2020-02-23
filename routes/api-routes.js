const router = require("express").Router();
const Workout = require("../models/exerciseModel.js");
const path = require("path");

// router.post("/api/workouts", ({ body }, res) => {
//     Workout.create(body)
//       .then(dbTransaction => {
//         res.json(dbTransaction);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
});

module.exports = router;
