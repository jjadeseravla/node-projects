const WorkoutModel = require('../models/WorkoutModel');
const mongoose = require('mongoose');

//get all
const getWorkouts = async(req, res) => {
  const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts)
};

//get single
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such single workout' });
  }

  const workout = await WorkoutModel.findById(id);
  if (!workout) {
    return res.status(404).json({ error: 'no such workout' });
  }

  res.status(200).json(workout);
}

//create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  // add doc to db
  try {
    const workout = await WorkoutModel.create({
      title, load, reps
    });
    res.status(200).json(workout)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

//delete one workout

//update a workout

module.exports = {
  createWorkout,
  getWorkouts,
  getSingleWorkout
}

