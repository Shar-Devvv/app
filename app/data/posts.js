// @/app/data/posts.js

import connectDb from "@/app/db/connectDb";
import Post from "@/app/db/models/Post"; // Assuming this is your Mongoose model

// 🔹 Fetch posts by category
export async function getPostsByCategorySlug(slug) {
  try {
    await connectDb(); // Connect to MongoDB

    // Find posts by the category slug, ignoring case ('i')
    const query = { category: new RegExp(`^${slug}$`, "i") };

    // Use the Mongoose model to fetch data from the database
    const posts = await Post.find(query).sort({ createdAt: -1 }).lean();

    return posts;
  } catch (error) {
    console.error("MongoDB Fetch Error (Category):", error);
    return []; // Return empty array on failure
  }
}

// 🔹 Fetch single post by slug
export async function getPostBySlug(slug) {
  try {
    await connectDb();
    const post = await Post.findOne({ slug }).lean();
    return post; // returns null if not found
  } catch (error) {
    console.error("MongoDB Fetch Error (Slug):", error);
    return null;
  }
}
