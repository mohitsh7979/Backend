import express from "express"

const port = 3000 

const app = express();

app.get('/',(req,res)=>{
    
    res.send("Hello Express js code")
})

app.get('/data',(req,res)=>{
    
    const a = [
        {
            id:1,
            name:"mohit",
            city:"Jaipur"
        },
        {
            id:2,
            name:"aman",
            city:"Udaipur"
        }
    ]
    res.send(a)
})

app.listen(port,()=>{})

