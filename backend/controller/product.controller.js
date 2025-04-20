import Product from "../model/product.model.js";
import mongoose from "mongoose";
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("error in get products:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong in server" });
  }
};

export const createProducts = async (req, res) => {
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
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .send({ success: "false", message: "Product not found" });
  }
  try {
    await Product.findByIdAndUpdate(id, product);
    res
      .status(200)
      .json({ success: true, message: "Product updated successfully" });
  } catch (error) {
    console.error("error in update product:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong in server" });
  }
};

export const deleteProducts = async (req, res) => {
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
};
