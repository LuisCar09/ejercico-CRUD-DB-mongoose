const express = require('express')
const router = express.Router()
const taskRoute = require('./tasks')
const Task = require('../models/Task')

router.get('/',async(req,res) => {

    try {
        const data = await Task.find()
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        console.error('Error fetching data from server',error.message);
        
    }
    
    
})
// - GET /id/:_id: Endpoint para buscar tarea por id.

router.get('/id/:_id',async(req,res) => {
    try {
        const userId = req.params._id
        const task = await Task.findById(userId)
        console.log(task);
        res.status(200).json(task)
        
    } catch (error) {
        console.error('Error fetching data from server',error.message);
    }
})

router.use('/',taskRoute)

router.use((req,res)=> {
    res.send('<h1>Page not found</h1>')
})

module.exports = router