const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Get data");
});


const start = async () => {
  try {
    app.listen(3000,()=>{
        console.log('server started')
    })
  } catch (error) {
    console.log(error);
  }
};

start();
