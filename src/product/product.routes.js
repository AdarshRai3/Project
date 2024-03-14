import ProductController from "./product.controller.js";
import express from "express";

const productRouter = express.Router();
const productController = new ProductController;

productRouter.get('/',productController.getAllProduct)
productRouter.get('/:id', productController.getOneProduct)
productRouter.post('/:id/rate', productController.rateProduct)
productRouter.post('/add', productController.addProduct)
productRouter.get('/filter', productController.filterProducts)


export default productRouter;