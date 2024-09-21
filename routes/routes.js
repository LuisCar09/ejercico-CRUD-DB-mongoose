const express = require('express')
const router = express.Router()
const taskRoute = require('./tasks')
const Task = require('../models/Task')


router.get('/',async(req,res) => {

    try {
        const data = await Task.find()
        
        res.status(200).send(data)
    } catch (error) {
        console.error('Error fetching data from server',error.message);
        
    }
    
    
})


router.get('/id/:_id',async(req,res) => {
    try {
        const userId = req.params._id
        const task = await Task.findById(userId)
        
        res.status(200).json(task)
        
    } catch (error) {
        console.error('Error fetching data from server',error.message);
    }
})


router.put('/id/:_id',async(req,res) => {
    const id = req.params._id
    const title = req.body.title
    const updateStatus = await Task.findByIdAndUpdate(id,{title:title},{new:true,runValidators:true})
    res.status(200).json(updateStatus)
})

router.put('/markAsCompleted/:_id',async(req,res) => {
    const id = req.params._id
    const status = req.body.completed
    const updateStatus = await Task.findByIdAndUpdate(id,{completed:status},{new:true,runValidators: true})
    res.status(200).json(updateStatus)
})


router.delete('/id/:_id',async(req,res) => {
    try {
        const userId = req.params._id
        const user = await Task.findByIdAndDelete(userId)
        if (user) {
            res.status(200).json({message:'User has beed deleted correctly'})
        }else{
            res.status(500).json({message:'User does not exists'})
        }
        
        res.send(user)
    } catch (error) {
        console.error('Error ');
        
    }
})

router.use('/',taskRoute)

router.use((req,res)=> {
    res.send('<h1>Page not found</h1>')
})

module.exports = router