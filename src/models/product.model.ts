import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        originalPrice: Number,
        category: {
            type: String,
            required: true
        },
        subCategory: String,
        brand: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        sizes: [String],
        colors: [String],
        media: [String],
        isFeatured: {
            type: Boolean,
            default: false
        },
        discountPercentage: Number
    },
    {
        timestamps: true
    }
);

if (mongoose.models && mongoose.models["products"]) {
    delete mongoose.models["products"];
}

const productModel = mongoose.model("products", productSchema);

export default productModel;