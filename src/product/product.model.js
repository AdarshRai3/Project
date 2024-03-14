import UserModel from "../user/user.model.js";
export default class ProductModel{
    constructor(id,name,description,price,imageUrl,category,sizes){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl= imageUrl;
        this,category=category,
        this.sizes =sizes
    }
    
    static getAll(){
        return [
            new ProductModel(1,"samsung","samsung mobile",1000,"samsung.png","mobile","4,5,6"),
            new ProductModel(2,"samsung","samsung mobile",1000,"samsung.png","mobile","4,5,6"),
            new ProductModel(3,"samsung","samsung mobile",1000,"samsung.png","mobile","4,5,6"),
        ]
        
    }

    static getProductById(id){
        const products = this.getAll();
        const product = products.find(p=> p.id === id);
        return product;
    }

    static filter(minPrice,maxPrice,category){
        const products = this.getAll();
        const filteredProducts = products.filter(p=> p.price>=minPrice && p.price<=maxPrice && p.category === category);
        return filteredProducts;
    }
    static rate(userId,productId,rating){
        const user = UserModel.getAll().find(
             
            (u)=>u.id === userId
        );

        if(!user){
            return 'UserId not Found';
        }
        const products =this.getAll();
        const product = products.find((p)=>p.id===productId);
        if(!product){
            return 'productId not found';
        }
        if(!product.ratings){
             product.ratings=[];
             product.ratings.push(
                {
                    userId:userId,
                    rating:rating
                }
            );
        }
        else{
            const existingRatingIndex = product.ratings.findIndex(
                (r)=>r.userId === userId
            );
            if(existingRatingIndex>=0){
                product.ratings[existingRatingIndex].rating = {
                    userId:userId,
                    rating:rating
                }
            }
            else{
                product.ratings.push(
                    {
                        userId:userId,
                        rating:rating
                    }
                );
            }
        }
    }
}