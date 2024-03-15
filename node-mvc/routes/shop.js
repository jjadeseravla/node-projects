const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getIndex);

router.get('/products', productsController.getProducts);
router.get('/cart', productsController.getCart);
router.post('/cart', productsController.postCart);

router.get('/orders', productsController.getOrders);
// router.get('/checkout', productsController.getCheckout);

//dynamic routes should always be at the end of the file as they should execute last
router.get('/products/:productId', productsController.getProduct);

module.exports = router;
