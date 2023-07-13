import mongoose from "mongoose";
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: {type: mongoose.Schema.Types.ObjectId, ref:'Product'},
    writeComment: String
})

export default mongoose.model('Comment', commentSchema);