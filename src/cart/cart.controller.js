import CartModel from "./cart.model.js";

export default class CartController {
    addCart(request,response){
        const {productId,quantity}=request.query;
        const userId = request.userId;
        CartModel.add(productId,userId,quantity);
        response.status(200).send("Cart is updated successfully");
    }

    getCart(request,response){
        const userId =request.userId;
        const cart = CartModel.get(userId);
        response.status(200).send(cart);
    }

    deleteCart(request,response){
        const userId = request.userId;
        const cartId = request.params.id;
        const error = CartModel.delete(userId,cartId);
        if(error){
           return response.status(404).send(error);
        }
          return response.status(200).send("Cart is deleted successfully");
    }
}