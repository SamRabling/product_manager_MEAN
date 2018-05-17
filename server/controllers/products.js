const mongoose = require("mongoose");
var Product = mongoose.model("product");

module.exports = {
    index: function (req, res) {
        Product.find({}, function (err, product) {
            if (err) {
                res.json({ status: false, error: err });
            } else {
                res.json({ status: true, data: product });
            }
        });
    },

    create: function (req, res) {
        var product = new Product({
            title: req.body.title,
            price: req.body.price,
            img: req.body.img
        });
        product.save(function (err) {
            if (err) {
                res.json({ status: false, error: err });
            } else {
                res.json({ status: true, data: product });
            }
        });
    },

    retrieve: function (req, res, err) {
        var id = req.params.id
        Product.findOne({ _id: id }, function (err, product) {
            if (err) {
                res.json({ status: false, error: err });
            } else {
                res.json({ status: true, data: product });
            }
        });
    },

    update: function (req, res, err) {
        var id = req.params.id
        Author.findById({ _id: id }, function (err, product) {
            if (err) {
                res.json({ status: false, data: err });
            } else {
                product.title = req.body.title,
                    product.price = req.body.price,
                    product.img = req.body.img
                product.save(function (err, updatedProduct) {
                    if (err) {
                        res.json({ status: false, error: err });
                    } else {
                        res.json({ status: true, data: updatedProduct });
                    }
                });
            }
        });
    },

    delete: function (req, res, err) {
        var id = req.params.id
        Product.findByIdAndRemove({ _id: id }, function (err, product) {
            if (err) {
                res.json({ status: false, error: err });
            } else {
                res.json({ status: true });
            }
        });
    }
}