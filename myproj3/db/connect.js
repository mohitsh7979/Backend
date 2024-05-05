const mongoose = require("mongoose")

// uri = "mongodb+srv://mohitsh7979:Oyg7N4xnumbwOmWO@myapi.mqvqpdl.mongodb.net/MyApi?retryWrites=true&w=majority&appName=My"

// const connetDB = async (uri) => {
//     try {
//         await mongoose.connect(uri);
//         console.log('MongoDB connected...');
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// }

const connetDB = (uri) => {
   
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}

module.exports = connetDB;
