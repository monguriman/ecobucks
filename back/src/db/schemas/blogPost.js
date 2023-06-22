import { Schema, model } from "mongoose";

const BlogPostSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        userName: {
            type: String,
            required: true,
        },
        topic: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true
        },
        likeCount: {
            type: Number,
            required: true,
            default: 0,
        },
        likeUsers: {
            type: Array,
            required: true,
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const BlogPostModel = model("BlogPost", BlogPostSchema);

export { BlogPostModel };
