const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const studentRoutes = require('./routes/studentRoutes')

const app=express()

app.use(bodyParser.json())
app.use('/api',studentRoutes)

const port= process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

