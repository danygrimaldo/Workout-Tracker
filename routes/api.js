//Referring to Act26 from w17 miniProj
const router = require("express").Router();
const Workouts = require("../models/workouts.js");

//PUT - "ID and UPDATE"

router.put("/api/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/exercise", ({ body }, res) => {
  Workouts.insertMany(body)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .sort({ date: -1 })
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/exercise", (req, res) => {
  Workouts.find({ id: req.params.id })
    .sort({ date: -1 })
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//DELETE - FIND BY ID and DELETE

//api/workouts/range -
//".find" + ".limit"

module.exports = router;
