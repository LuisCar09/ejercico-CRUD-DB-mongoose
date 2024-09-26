const express = require('express')
const router = express.Router()
const Task = require('../models/Task')
const TaskController = require('../controllers/Task.controllers')


router.post('/create',TaskController.create)

module.exports = router