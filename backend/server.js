const Dotenv = require('dotenv')

const express = require('express')
const path = require('path')
const app = require('./App.js')


// setting the config file location. config files stores the variable value pairs.
Dotenv.config({path:path.resolve(__dirname+'/config.env')})


const PORT = process.env.PORT || 5500

app.listen(PORT,()=>{
    console.log(`Listening to port number : ${PORT}`)
    console.log(path.resolve(__dirname+'/config.env'))

    
})