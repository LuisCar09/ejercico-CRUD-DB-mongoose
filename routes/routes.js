const express = require('express')
const router = express.Router()
const taskRoute = require('./tasks')
const Task = require('../models/Task')
const TaskController = require('../controllers/Task.controllers')

router.get('/',TaskController.getAll)

router.get('/id/:_id',TaskController.getById)

router.put('/id/:_id',TaskController.updateTitle)

router.put('/markAsCompleted/:_id',TaskController.updateCompleted)

router.delete('/id/:_id',TaskController.deleteById)

router.use('/',taskRoute)

router.use((req,res)=> {
    res.send('<h1>Error 404 Page not found</h1>')
})

module.exports = router