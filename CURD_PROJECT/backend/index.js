const express = require('express');
const bodyParser = require("body-parser");
const app = express()



app.get('/',(req,res)=>{
    res.send('get method')
})

app.use(bodyParser.json())

app.post('/data',(req,res)=>{
    res.send(req.body)
})

app.listen(4000,()=>{
    console.log("server runing..")
}) 