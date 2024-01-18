const express = require('express')
const app = express();
const BodyParser = require('body-parser')
app.use(express.json())

//    in latest version of express... inbuild bodyparser are not installed.
// due to which json data can't be convert in objects in API Calling

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:true}))

// using routes for Authentication services
const AuthenticationRoutes = require('./Routes/AuthenticationRoutes')
app.use('/api/v1',AuthenticationRoutes)


module.exports = app
