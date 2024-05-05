require("dotenv").config();

const connectDB = require("./db/connect");
const product = require("./models/product");
const ProductJson = require("./product.json");

const start = async ()=>{

    try{

        await connectDB(process.env.MONGODB_URL)
        await product.create(ProductJson)
        console.log("Success")
    }
    catch(error){
        console.log(error)
    }
}

start();