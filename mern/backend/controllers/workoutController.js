const WorkoutModel = require('../models/workoutModel');
const mongoose = require('mongoose');

//get all
const getWorkouts = async (req, res) => {
  const user_id = req.user._id;
  const workouts = await WorkoutModel.find({ user_id }).sort({ createdAt: -1 });
  // will only find docs by current logged in user with the user_id,
  // and fgive those ones back to the broser in workouts (line below)
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
  console.log('--------------here----------')
  const { title, load, reps } = req.body;
  // add doc to db
  try {
    const user_id = req.user._id;
    const workout = await WorkoutModel.create({
      title, load, reps, user_id
    });
    res.status(200).json(workout)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}

//delete one workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'no such workout'})
  } 
  const workout = await WorkoutModel.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(400).json({ error: 'no such workout' });
  }
  res.status(200).json(workout);
}

//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such workout' });
  }
  const workout = await WorkoutModel.findOneAndUpdate({ _id: id }, {
    ...req.body
  });
  if (!workout) {
    return res.status(400).json({ error: 'no such workout' });
  }
  res.status(200).json(workout);
}

module.exports = {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout
}

