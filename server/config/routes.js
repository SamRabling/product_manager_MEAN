const mongoose = require("mongoose");
const products = require("../controllers/products");

module.exports = function (app) {
    app.get("/products", products.index);
    app.post("/products", products.create);
    app.get("/products/:id", products.retrieve);
    app.post("/products/:id", products.update);
    app.post("/products/remove/:id", products.delete);
}