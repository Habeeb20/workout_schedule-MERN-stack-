const express = require("express");
const router = express.Router()
const controller = require('../controller/workoutController')
const { createWorkout, getAllWorkout, getWorkout } = require("../controller/workoutController");


router.get('/', controller.getAllWorkout)
router.get('/:id', controller.getWorkout)
router.post('/', controller.createWorkout)
router.delete('/:id', controller.deleteWorkout)
router.patch('/:id', controller.updateWorkout)


module.exports= router

