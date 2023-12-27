require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const { connectDb } = require('./dataBase/dbconnect')
connectDb()
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 4000;


const {logEvents, loggers} = require('./middleware/logger')
const workout = require('./route/workout')
const userWorkout = require('./route/user')
const corsOptions = require('./config/corsOptions')


// app.use(cors(corsOptions))


app.use(express.json())
// app.use(loggers)
app.use(express.static('public'))

app.use("/api/workout", workout)
app.use("/api/user", userWorkout)








mongoose.connection.once('open', () => {
    console.log("connected")
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
})


mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'mongoerrlog.log')
})