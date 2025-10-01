// @/app/data/posts.js (This function is used by your CategoryPage)

import connectDb from "@/app/db/connectDb";
import Post from "@/app/db/models/Post"; // Assuming this is your Mongoose model
import { getPostsByCategorySlug } from '@/app/data/posts';

export async function getPostsByCategorySlug(slug) {
    try {
        await connectDb(); // Connect to MongoDB
        
        // Find posts by the category slug, ignoring case ('i')
        const query = { category: new RegExp(`^${slug}$`, 'i') }; 
        
        // Use the Mongoose model to fetch data from the database
        const posts = await Post.find(query).sort({ createdAt: -1 }).lean(); 
        
        // Use .lean() to get plain JavaScript objects for passing to the component

        // If you are using 'use client' in CategoryPage, you must stringify/parse
        // Mongoose dates. But since your page is an 'async' component, 
        // you likely don't need this step if you just use plain objects.
        
        return posts; 
    } catch (error) {
        console.error("MongoDB Fetch Error:", error);
        return []; // Return empty array on failure
    }
}