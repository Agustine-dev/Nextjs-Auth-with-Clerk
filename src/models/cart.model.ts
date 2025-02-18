import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        items: [cartItemSchema]
    },
    {
        timestamps: true
    }
);

if (mongoose.models && mongoose.models["carts"]) {
    delete mongoose.models["carts"];
}

const cartModel = mongoose.model("carts", cartSchema);

export default cartModel;