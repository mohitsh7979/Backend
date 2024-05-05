const Product = require("../models/product")

const   getallproducts = async (req,res) => {
    const data = await Product.find({})
    res.status(200).json({data})
}


const getallproductstesting = async (req,res) => {
    const data = await Product.find(req.query)
    res.status(200).json({data})
}

const createProduct = async (req, res) => {
    // try {
    //     // const product = new Product(req.body);
    //     console.log(req.body,'product>>><<<<<')
    //     await product.save();
    //     // res.status(200).json({ message: "Product created successfully", data: product });
    // } catch (error) {
    //     res.status(500).json({ message: "Failed to create product", error: error.message });
    // }
    console.log(req.body)
    res.send("Yes calling")

};

module.exports = { getallproducts, getallproductstesting, createProduct };


