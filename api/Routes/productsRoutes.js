import express from "express";
import ProductController from "../Controllers/productController.js"

const router = express.Router();

router
  .get("/products", ProductController.listProducts)
export default router;
