const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductsById,
} = require("../controller/productControllers");

//@desc  GET all products from db
//@route GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc  GET a products by id from db
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProductsById);

module.exports = router;
