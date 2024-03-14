
export default class CartModel{
    constructor(id,userId,productId,quatity){
      this.id =id;
      this.userId = userId;
      this.productId=productId;
      this.quatity=quatity;
    }

    static add (productId,userId,quantity){
        const cart = new CartModel(
            productId,
            userId,
            quantity
        );
        cart.id = cartItems.length+1;
        cartItems.push(cart);
        return cart;
    }
    
    static get(userId){
        return cartItems.filter((i)=>i.userId === userId);
    }

    static delete(userId,cartId){
        const index = cartItems.findIndex((i)=> i.userId===userId && i.id===cartId);
        if(index>=0){
            cartItems.splice(index,1);
        }else{
            return "Item not found";
        }
    }
}
var cartItems = [
    new CartModel(1,2,1,1)
];