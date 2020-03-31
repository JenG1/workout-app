const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  nameInput: {
    type: String,
    trim: true,
    required: "Workout Name"
  },
  durationInput: {
    type: Number,
    trim: true,
    required: "Duration of Workout"
  },
  distanceInput: {
    type: Number,
    trim: true,
    required: "Distance"
  }
})

const Cardio = mongoose.model("Cardio", CardioSchema)

module.exports = Cardio