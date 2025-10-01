// app/db/models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: { type: String},
    category: { type: String },
    imageUrl: { type: String },
    authorId: { type: String},
    authorName: { type: String },
  },
  { timestamps: true }
);

// ✅ Safe export (prevents "undefined" crash)
export default (mongoose.models && mongoose.models.Post) 
  ? mongoose.models.Post 
  : mongoose.model("Post", PostSchema);
