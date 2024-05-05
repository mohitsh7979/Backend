const mongoose = require("mongoose")
const { options } = require("../routes/aliens")

uri = "mongodb+srv://mohitsh7979:Oyg7N4xnumbwOmWO@myapi.mqvqpdl.mongodb.net/MyApi?retryWrites=true&w=majority&appName=My"

const connetDB = ()=>{

    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
}

module.exports = connetDB;