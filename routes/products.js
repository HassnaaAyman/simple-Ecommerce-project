var express = require('express');
var router = express.Router();
const Products = require('../models/products');



/* GET all products page. */
router.get('/', function (req, res, next) {
  let products = Products.getAll();
  res.send(products);
});

/* GET  products by id page. */
router.get('/:productId', function (req, res, next) {
  let products = Products.getById(req.params.productId);
  res.send(products);
});

/* ADD new product */
router.post('/', function (req, res, next) {
  let addProduct = Products.add(req.body);
  res.send(addProduct);
});

/* DELETE product */
router.delete('/:productId', function (req, res, next) {
  let deletedProduct = Products.delete(req.params.productId, true);
  res.send(deletedProduct);
});

/* UPDATE product */
router.patch('/:productId', function (req, res, next) {
  let updatedProduct = Products.patch(req.params.productId, req.body);
  res.send(updatedProduct);
});
module.exports = router;
