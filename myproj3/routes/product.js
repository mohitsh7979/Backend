const express = require("express")
const router = express.Router();

const {getallproducts,getallproductstesting, createProduct} = require("../controlers/prodcuts")

router.route("/").get(getallproducts);
router.route("/testing").get(getallproductstesting)
router.route("/").post(createProduct);


module.exports = router;