
import mongoose from "mongoose"

const alienSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    teach:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports = mongoose.model('Alien',alienSchema)