import express from "express"

const port = 3000

const app = express()

app.get('/',(req,res)=>{
   
    res.send("My Express project")
})

app.get('/name',(req,res)=>{
    
    res.send("My Name is this")
})

app.get('/data',(req,res)=>{
    
    const data = [

        {
            id:1,
            name:"mohit",
            city:"jaipur"
        },
        {
            id:2,
            name:"aman",
            city:"udaipur"
        },
        {
            id:3,
            name:"Ankit",
            city:"Udaipur"
        }
    ]

    res.send(data)
})

app.get('/myarray',(req,res)=>{
    const array = [10,20,30,40,50];
    res.send(array)
})

app.listen(port,()=>{})