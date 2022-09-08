const Product = require("../models/productModel");

//@desc     Gets All Products
//@route    Get /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

//@desc     Gets Single Product
//@route    Get /api/product/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

//@desc     Create Product
//@route    Post /api/products
async function createProduct(req, res) {
  try {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.stringify();
    });
    req.on("end", () => {
      const { name, description, price } = JSON.parse(body);
      const product = {
        name: "Add new product ",
        description: "This is product description section",
        price: 44,
      };
      const newProduct = Product.create(product);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newProduct));
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
