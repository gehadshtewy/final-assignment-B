import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`server is running on port${process.env.PORT}`);
})



export default app;
