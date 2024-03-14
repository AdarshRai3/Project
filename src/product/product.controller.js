import ProductModel from "./product.model.js";
export default class ProductController{
    getAllProduct(request,response){
       try{
            const products = ProductModel.getAll();
            response.status(200).send(products);

       }catch(err){
       }
    }
    getOneProduct(request,response){
       const {id} = request.params;
       const product = ProductModel.getProductById(id);
       if(!product){
           response.status(404).send("Product not found");
       }
       response.status(200).send(product);
    }

    filterProducts(request,response){
       const {minPrice,maxPrice,category} = request.query;
       const result = ProductModel.filter(minPrice,maxPrice,category);
       response.status(200).send(result);
    }
    rateProduct(request,response){
       const userId = request.query.userId;
       const productId = request.query.productId;
       const rating = request.query.rating;
       const error = ProductModel.rate(userId,productId,rating);
       if(error){
         return response.status(200).send(error);
       } else{
         return response.status(200).send("Rating added successfully");
       }
    }
    addProduct(request,response){

    }
 }