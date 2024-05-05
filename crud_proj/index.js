import express from 'express'
import mongoose from 'mongoose'
// import mongoose from 'mongoose'
const url = 'mongodb://localhost/AlienBex'

const app = express()
const mongo = mongoose

mongo.connect(url,{useNewUrlParser:true})
const con = mongo.connection

con.on('open',function(){
    console.log('connected...')
})

app.use(express.json())

// const alienRouter = require('./routes/aliens')
import alienRouter from './routes/aliens'

app.use('/aliens',alienRouter)

app.listen(3000,()=>{
    console.log('server started....')
})