import express from "express";
import ProductController from "../Controllers/productController.js";

const router = express.Router();

router
  .get("/products", ProductController.getProducts)
  .get("/product/:id", ProductController.getProductById)
  .post("/products", ProductController.postProduct)
  .put("/products/:id", ProductController.updateProduct)
  .delete("/products/:id", ProductController.deleteProduct)
  .get("/productType/:productType", ProductController.getproductsByType)
export default router;
