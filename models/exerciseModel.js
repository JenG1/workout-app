const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise"
  },
  type: {
    type: String,
    trim: true,
    required: "Enter type of exercise (cardio or weight training)"
  },
  sets: {
    type: String,
    trim: true,
    required: "Enter number of sets"
  },
  reps: {
    type: String,
    trim: true,
    required: "Enter number of reps"
  },
  duration: {
    type: Number,
    required: "Enter exercise duration"
  }
});

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout;
