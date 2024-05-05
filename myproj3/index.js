require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const connetDB = require("./db/connect");
const Product = require("./models/product");

const product_routes = require("./routes/product");
const app = express();

app.get("/", async (req, res) => {
  const data = await Product.find({});
  res.send({ data });
});

// app.use("/api/prducts",product_routes)
// app.use(express.json());
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  try {
    const prod = new Product(req.body);
    await prod.save();
    res
      .status(200)
      .json({ message: "Product created successfully", data: prod });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create product", error: error.message });
  }
});

app.put("/:id", async (req, res) => {
  const id = req.params.id;
//   console.log(id)
//   console.log(req.body)
  try {
    console.log("i am in")
    const p = await Product.findByIdAndUpdate(id, req.body, { new: true });
    console.log(p,"update")
    res.json(p);
  } catch (error) {
    res.json(error);
  }
});

app.patch("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    try {
      const p = await Product.findByIdAndUpdate(id, req.body, { new: true });
      console.log(p);
      res.json(p);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update product', error: error.message });
    }
  });

app.delete("/:id",async(req,res)=>{

    const id = req.params.id;

    try{
        
        await Product.findByIdAndDelete(id);
        res.send("data deleted successfully !!")
    }
    catch(error){
        res.send(error)
    }
})

const start = async () => {
  try {
    await connetDB(process.env.MONGODB_URL);
    app.listen(4000, () => {
      console.log("server started.... yes i am connected");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
