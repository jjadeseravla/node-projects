const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/products => GET
router.get('/products', productsController.getAllProducts);



// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);
router.get('/edit-product/:productId', productsController.getEditProduct)

// exports.routes = router;
module.exports = router;
 