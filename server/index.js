import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductRouter from "./controllers/product.js";
dotenv.config();

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/products', ProductRouter);

mongoose.connect(process.env.MONGO_URL)
.then(results => {
    app.listen(process.env.PORT, () => {
        console.log(`server is running on port${process.env.PORT}`);
    })
})
.catch(error => {
    console.log(error);
})




export default app;
