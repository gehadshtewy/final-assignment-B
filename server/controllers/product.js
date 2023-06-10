import express from "express";
const router = express.Router();
import mongoose from "mongoose";
//import models
import Category from "../models/Category.js";
import Product from "../models/products.js";
//function
//CRUD category
router.post('/add_new_category', async(req,res) => {
    const userc = req.body.userc;
    const id = new mongoose.Types.ObjectId;
    const _category = new Category({
        _id: id,
        categoryName: userc.categoryName,
        categoryLogo: userc.categoryLogo
    })
    _category.save()
    .then(category => {
        return res.status(200).json({
            message: category
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

router.get('/get_all_categories', async(req,res) => {
    Category.find()
    .then(categories => {
        return res.status(200).json({
            message: categories
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

//CRUD product
router.post('/add_new_product', async(req,res) => {
    const user= req.body.user;
    const id = new mongoose.Types.ObjectId;
    const _product = new Product({
        _id: id,
        productName: user.productName,
        productImage: user.productImage,
        productPrice: user.productPrice,
        categoryId: user.categoryId,
        discription: user.discription
    })
    _product.save()
    .then(products => {
        return res.status(200).json({
            message: products
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

router.get('/get_all_product', async(req,res) => {
    Product.find()
    .populate("categoryId")
    .then(products => {
        return res.status(200).json({
            message: products
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

router.put('/update_product_by_id/:pid', async(req,res) => {
    const productId = req.params.pid;
    const {productName,productImage,productPrice,unitInStack,categoryId} = req.body;
    Product.findById(productId)
    .then(product => {
        product.productName = productName;
        product.productImage = productImage;
        product.productPrice = productPrice;
        product.unitInStack = unitInStack;
        product.categoryId = categoryId;

        product.save()
        .then(product_updated => {
            return res.status(200).json({
                message: product_updated
            })
        })

    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})

router.delete('/delete_product_by_id/:pid', async(req,res) => {
    const productId = req.params.pid;
    Product.findOneAndDelete(productId)
    .then(product => {
        return res.status(200).json({
            message: 'product Remove'
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

router.get('/get_product_by_id/:pid', async(req,res) => {
    const productId = req.params.pid;
    Product.findById(productId)
    .populate("categoryId")
    .then(product => {
        return res.status(200).json({
            message: product
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

router.post('/get_products_by_name', async(req,res) => {

    const query = req.body.query;
    Product.find({unitInStack: query})
    .populate("categoryId")
    .then(products => {
        return res.status(200).json({
            message: products
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

export default router;