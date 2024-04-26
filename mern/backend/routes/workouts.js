const express = require('express');
const WorkoutModel = require('../models/WorkoutModel');
const {
  createWorkout,
  getWorkouts,
  getSingleWorkout
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', (getWorkouts));

router.get('/:id', (getSingleWorkout));

router.post('/', (createWorkout));

router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a new workout' })
});

router.patch('/:id', (req, res) => {
  res.json({msg: 'UPDATE a new workout'})
})

module.exports = router;