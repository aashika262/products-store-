import express from "express";
import dotenv, { config } from "dotenv";
import connectDB from "./config/db.js";
import Product from "./model/product.model.js";

import productRoute from "./routes/product.routes.js"; // import productRoute

dotenv.config();

const app = express();

app.use(express.json()); // allows to accept json data in the eeq.body

app.use("/api/products", productRoute);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000 hello");
});
// aashika123     IP address (27.34.64.21)
