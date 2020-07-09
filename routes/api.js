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

router.put("/api/workouts/:id", ({ params, body }, res) => {
  Workouts.findById(params.id).then((dbWorkouts) => {
    dbWorkouts.exercises.push(body);
    Workouts.findByIdAndUpdate(
      params.id,
      dbWorkouts,
      (err, result) => {
        if (err) res.json(err);
        else res.json(result);
      }
      // res.json(dbWorkouts);
      // console.log(dbWorkouts);
    );
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

router.get("/api/workouts", (req, res) => {
  Workouts.find()
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//DELETE - FIND BY ID and DELETE

router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
// ".find" + ".limit"

module.exports = router;
