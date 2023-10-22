const mongoose = require("mongoose")

const workoutSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    reps: {
        type:String,
        required: true
    },
    loads: {
        type:String,
        required: true
    },
    
}, { timestamps: true}
)


module.exports = mongoose.model("Workout", workoutSchema)