import express from "express";

const app = express();

const port = 3000

// app.get('/',(req,res)=>{
//     res.send("Server is ready")
// })

app.get('/',(req,res)=>{
    
    const data = [

        {
            id:1,
            name:"Mohit",
            age:20
        },
        {
            id:2,
            name:"Rohit",
            age:22
        },
        {
            id:3,
            name:"Aman",
            age:25
        },
        {
            id:4,
            name:"Ankit",
            age:35
        },
    ]

    res.send(data)
})

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`)
})