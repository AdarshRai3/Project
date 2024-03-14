import CartController from "./cart.controller.js";
import express from 'express';

const cartRouter = express.Router();
const cartController = new CartController();

cartRouter.get('/add',cartController.addCart);

export default cartRouter;