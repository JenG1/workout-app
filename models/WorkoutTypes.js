const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  nameInput: {
    type: String,
    trim: true,
    required: "Add Name"
  },
  weightInput: {
    type: Number,
    trim: true,
    required: "Add weight"
  },
  setsInput: {
    type: Number,
    trim: true,
    required: "Number of sets"
  },
  repsInput: {
    type: Number,
    trim: true,
    required: "Number of reps"
  },
  durationInput: {
    type: Number,
    trim: true,
    required: "Duration of workout"
  }
})

const Resistance = mongoose.model("Resistance", ResistanceSchema)

const CardioSchema = new Schema({
  cardioNameInput: {
    type: String,
    trim: true,
    required: "Name"
  },
  durationInput: {
    type: Number,
    trim: true,
    required: "Add Name"
  },
  distanceInput: {
    type: Number,
    trim: true,
    required: "Distance of workout"
  }
})

const Cardio = mongoose.model("Cardio", CardioSchema)

const WorkoutTypes = [Cardio, Resistance]

module.exports = WorkoutTypes;