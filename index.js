const express = require('express')
const dotenv = require('dotenv')
const {dbConnection} = require('./config/config')
dotenv.config()
const PORT = process.env.PORT ?? 4000
dbConnection()
const app = express()

app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
    
})