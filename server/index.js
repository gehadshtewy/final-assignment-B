import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
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
