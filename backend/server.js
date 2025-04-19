import express from "express";
import dotenv, { config } from "dotenv";
import connectDB from "./config/db.js";
import Product from "./model/product.model.js";

dotenv.config();
const app = express();

app.use(express.json()); // allows to accept json data in the eeq.body

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("error in get products:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong in server" });
  }
});

app.post("/api/products", async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res
      .status(201)
      .json({ success: true, message: "Product created successfully" });
  } catch (error) {
    console.error("error in create product:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong in server" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("error in delete product:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong in server" });
  }
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 hello");
});
// aashika123     IP address (27.34.64.21)
