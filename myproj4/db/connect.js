const mongoose = require('mongoose')

const connect_database = async ()=>{

    try{
        await mongoose.connect()
        console.log('Database conneted...')

    }catch(error){
        console.log(error)
    }
}