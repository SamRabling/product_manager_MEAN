const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 2 },
    price: { type: Number, required: true },
    img: { type: String, required: true, minlength: 2 }
})

mongoose.model('product', ProductSchema)