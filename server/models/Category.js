import mongoose from "mongoose";
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryName: String,
    categoryLogo: String
})

export default mongoose.model('Category', categorySchema);