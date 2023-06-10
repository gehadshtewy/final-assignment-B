import mongoose from "mongoose";
const Schema = mongoose.Schema;


const productSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: String,
    productImage: String,
    productPrice: Number,
    discription: String,
    createdAt: {type:String, default: Date.Now},
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref:'Category'}
})

export default mongoose.model('Product', productSchema);