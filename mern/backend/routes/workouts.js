const express = require('express');
const WorkoutModel = require('../models/workoutModel');
const requireAuth = require('../middleware/requireAuth');

const {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController');

const router = express.Router();

// require auth for all workout routes, so it fires this middleware fn: requireAuth before all the folling routes below
router.use(requireAuth);

router.get('/', (getWorkouts));

router.get('/:id', (getSingleWorkout));

router.post('/', (createWorkout));

router.delete('/:id', (deleteWorkout));

router.patch('/:id', (updateWorkout));

module.exports = router;