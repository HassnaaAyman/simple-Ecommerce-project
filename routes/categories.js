var express = require('express');
var router = express.Router();
const Categories = require('../models/categories');


/* GetAll categories */
router.get("/", function (req, res, next) {
    let categories = Categories.getAll();
    res.send(categories);
});

/* GetById categories */
router.get("/:categoriesId", function (req, res, next) {
    let categories = Categories.getById(req.params.categoriesId);
    res.send(categories);
});

/* Add new category */
router.post('/', function (req, res, next) {
    let addcategory = Categories.add(req.body);
    res.send(addcategory);
});

/* Delete  category */
router.delete("/:categorieId", function (req, res, next) {
    let categories = Categories.delete(req.params.categorieId, true);
    res.send(categories);
});

/* Update  category */
router.patch("/:categorieId", function (req, res, next) {
    let categories = Categories.patch(req.params.categorieId, req.body);
    res.send(categories);
});


module.exports = router;