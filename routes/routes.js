const express = require('express')
const router = express.Router()
const taskRoute = require('./tasks')
router.get('/',(req,res) => {
    res.send('<h1>Hello World!</h1>')
})

router.use('/',taskRoute)

app.use((req,res)=> {
    res.send('<h1>Page not found</h1>')
})

module.exports = router