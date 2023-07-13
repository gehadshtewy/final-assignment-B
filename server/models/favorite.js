import mongoose from "mongoose";
const Schema = mongoose.Schema;


const favoriteSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: {type: mongoose.Schema.Types.ObjectId, ref:'Product'}

})

export default mongoose.model('Favorite', favoriteSchema);