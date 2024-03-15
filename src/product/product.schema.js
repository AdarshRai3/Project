import mongoose from 'mongoose';

const productSchema = new Mongoose.schema ({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    category: String,
    sizes: String
});