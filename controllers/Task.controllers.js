
const Task = require('../models/Task')

const TaskController = {
    async getAll(req, res) {
        try {
            const data = await Task.find()
            res.status(200).send(data)
        } catch (error) {
            console.error('Error fetching data from server', error.message);
        }
    },
    async create(req, res) {
        try {
            const task = await Task.create(req.body)
            res.status(201).json(task)
        } catch (error) {
            res
                .status(500)
                .send({ message: 'There was a problem trying to create a task' })
        }
    },

    async getById(req, res) {
        try {
            const userId = req.params._id
            const task = await Task.findById(userId)

            res.status(200).json(task)

        } catch (error) {
            console.error('Error fetching data from server', error.message);
        }
    },

    async updateTitle(req, res) {

        try {
            const id = req.params._id
            const title = req.body.title
            const updateStatus = await Task.findByIdAndUpdate(id, { title: title }, { new: true, runValidators: true })

            if (!updateStatus) {
                res.status(500).send({ message: 'the task with the provided id does not exist' })
            }

            res.status(200).json(updateStatus)
        } catch (error) {
            console.error('Error fetching task from server', error.message);

        }
    },
    async updateCompleted(req,res){
        try {
            const id = req.params._id
            const status = req.body.completed
            const updateStatus = await Task.findByIdAndUpdate(id,{completed:status},{new:true,runValidators: true})
            
            if (!updateStatus) {
                res.status(500).send({message: 'the task with the provided id does not exist.'})
            }
            res.status(200).json(updateStatus)
        } catch (error) {
            console.error('Error fetching task from server.',error.message);
            
        }
    },
    async deleteById(req,res){
        try {
            const userId = req.params._id
            const user = await Task.findByIdAndDelete(userId)
            if (user) {
                res.status(200).json({message:'User has beed deleted correctly'})
            }else{
                res.status(500).json({message:'User does not exists'})
            }
            res.json(user)
        } catch (error) {
            console.error('Error fetching task from server.',error.message);
            
        }
    },
}

module.exports = TaskController
