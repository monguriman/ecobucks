import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    location: {
      x: {
        type: Number,
        required: true,
      },
      y: {
        type: Number,
        required: true,
      },
    },
    stock: {
      type: Number,
      required: true,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sellerName: {
      type: Schema.Types.String,
      ref: "User",
    },
    description: {
      type: String,
      default: "상품 상세 설명이 없습니다.",
      required: true,
    },
    imageId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Image',
    },
  },
  {
    timestamps: true,
  }
);

const productModel = model("Product", productSchema);

export { productModel };
