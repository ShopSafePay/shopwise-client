import mongoose from "mongoose";

const ProductSellSchema = new mongoose.Schema({

    productId: {
        type: Number,
        require: true,
    },
    count: {
        type: Number,
        require: true,
    },
    buyerId: {
        type: String,
        require: true,
    },
    buyerName: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    transactionId: {
        type: String,
        require: true,
    },
    buyerAccount: {
        type: String,
        require: true,
    },

})

export default mongoose?.models?.ProductSell || mongoose.model("ProductSell", ProductSellSchema);