import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 8080;

connectDB();

const app = express();

// _______________________________________________________________________________________________

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// _______________________________________________________________________________________________

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
