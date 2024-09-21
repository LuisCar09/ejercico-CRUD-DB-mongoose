const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.URI)
        console.log('Data base has been connected!');
        
    } catch (error) {
        throw new Error('Error starting data base')
    }
}

module.exports = {
    dbConnection
}