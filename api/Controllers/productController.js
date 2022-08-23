import product from "../Models/Product.js";

class ProductController {
  //GET all products
  static listProducts = (req, res) => {
    //use the find method in the product model
    product.find((err, product) => {
      res.status(200).json(product);
      console.log(product)
    });
  };

  }

export default ProductController;
