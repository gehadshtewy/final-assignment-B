import express from "express";
const router = express.Router();
import mongoose from "mongoose";
//import models
import Category from "../models/Category.js";
import Product from "../models/products.js";
import Favorite from "../models/favorite.js";
import Cart from "../models/Cart.js";
import Comment from "../models/Comment.js";
import Account from '../models/account.js';
import bcryptjs from 'bcryptjs';
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
router.get('/get_all_product2', async(req,res) => {
    const userfor=req.body.userfor;
    Product.findOne({categoryId:userfor._id})
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
router.get('/get_product_by_id2/:pid', async(req,res) => {
    const categoryId1 = req.params.pid;
    Product.find({categoryId:categoryId1})
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

//CURD favorite
router.post('/add_new_product-in-favorite', async(req,res) => {
    const userf = req.body.userf;
    const id = new mongoose.Types.ObjectId;
    const _favorite = new Favorite({
        _id: id,
        productId: userf.productId
    })
    _favorite.save()
    .then(favorite => {
        return res.status(200).json({
            message: favorite
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

router.get('/get_all_product-in-favorite', async(req,res) => {
    Favorite.find()
    .populate("productId")
    .then(favorites => {
        return res.status(200).json({
            message: favorites
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})
///CURD Cart
router.post('/add_product_in_cart', async(req,res) => {
    const userr = req.body.userr;
    const id = new mongoose.Types.ObjectId;
    const _cart = new Cart({
        _id: id,
        productId: userr.productId
    })
    _cart.save()
    .then(cart => {
        return res.status(200).json({
            message: cart
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

router.get('/get_all_product_in_cart', async(req,res) => {
    Cart.find()
    .populate("productId")
    .then(cart => {
        return res.status(200).json({
            message: cart
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

///CURD Comment
router.post('/add_new_comment', async(req,res) => {
    const userm = req.body.userm;
    const id = new mongoose.Types.ObjectId;
    const _comment = new Comment({
        _id: id,
        productId:userm.productId,
        writeComment: userm.writeComment
    })
    _comment.save()
    .then(comment => {
        return res.status(200).json({
            message: comment
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})
/*
router.post('/get_all_comment', async(req,res) => {
    const userget=req.body.productId;
    Comment.find({productId: userget.productId})
    .then(comments => {
        return res.status(200).json({
            message: comments
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})*/

router.get('/get_all_comment/:id', async(req,res) => {
    const productId1= req.params.id;
    Comment.find({productId:productId1})
    .then(comments => {
        return res.status(200).json({
            message: comments
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

///
router.delete('/delete_cart_by_id/:id', async(req,res) => {
    const cartId = req.params.id;
    Cart.findOneAndDelete(cartId)
    .then(cart => {
        return res.status(200).json({
            message: 'Cart product Remove'
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})
/// account
router.post('/creatNewAccount', async(req,res) => {
    const user = req.body.user;
    const hash = await bcryptjs.hash(user.password, 10);
    const id = new mongoose.Types.ObjectId();
    const _account = new Account({
        _id: id,
        firstName: user.firstName,
        lastName: user.lastName,
        uid: user.uid,
        avatar: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        email: user.email,
        password: hash
    });
    _account.save()
    .then(accountCreated => {
        return res.status(200).json({
            message: accountCreated
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })

})


router.post('/getMyDetails', async(req,res) => {
    const user = req.body.user;
    Account.findOne({uid: user.uid})
    .then(account => {


        return res.status(200).json({
            message: account
        })
    })
    .catch(error => {
        return res.status(500).json({
            message: error.message
        })
    })
})

export default router;