const express = require('express')
const dotenv = require('dotenv')
const {dbConnection} = require('./config/config')
dotenv.config()
const PORT = process.env.PORT ?? 4000
const app = express()

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
dbConnection()


app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
    
})