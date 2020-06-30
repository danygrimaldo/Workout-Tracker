const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "What type of exercise is this?",
        },
        name: {
          type: String,
          trim: true,
          required: "What is the name of your exercise?",
        },
        duration: {
          type: Number,
          required: "How long did this exercise last? (Enter value in minutes)",
        },
        weight: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutsSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
