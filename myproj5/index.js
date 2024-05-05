const express = require('express')
const bodyParser = require("body-parser");

let app = express()

app.get('/',(req,res)=>{
    
    const data = [
        {
            id:1,
            name:"mohit",
            city:"jaipur"
        },
        {
            id:2,
            name:"rohit",
            city:"jodhour"
        },
        {
            id:3,
            name:"aman",
            city:"udaipur"
        },
        {
            id:4,
            name:"anu",
            city:"kota"
        },
    ]
    res.send(data)
})

app.use(bodyParser.json())

app.post('/',(req,res)=>{

    console.log(req.body,"<>>><<<>")
})


app.listen(4000,()=>{
    console.log('server statred')
})