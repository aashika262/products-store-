import express from "express";
import dotenv, { config } from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import Product from "./model/product.model.js";

import productRoute from "./routes/product.routes.js"; // import productRoute

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows to accept json data in the eeq.body

app.use("/api/products", productRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
// aashika123     IP address (27.34.64.21)
