"use client"
import React from 'react';
import Blogs from '@/public/components/Blogs'; 
import Top from '@/public/components/Top';
import { notFound } from 'next/navigation';

// **IMPORTANT**: Assuming your post data utility is at public/lib/posts.js
import { getPostsByCategorySlug } from '@/app/data/posts'; 

const CategoryPage = async ({ params }) => {
    // 1. Get the category slug from the URL (e.g., 'anime' or 'fashion')
    const categorySlug = params.categorySlug;

    // 2. Fetch all posts that match this category
    const postsList = await getPostsByCategorySlug(categorySlug);

    // 3. Handle case where no posts are found
    if (!postsList || postsList.length === 0) {
        return notFound(); 
    }

    // 4. Get the Category Name from the first fetched post for correct capitalization in the banner
    // This handles cases where the URL slug is 'anime' but the data holds 'Anime'.
    const categoryName = postsList[0].category;

    // 5. Prepare data for the Top banner (e.g., "Anime Blog")
    const mockPostForTop = {
        category: categoryName
    };

    return (
        <main className="min-h-screen">
            {/* The Top component uses 'post.category' for the banner title */}
            <Top post={mockPostForTop} /> 
            
            <div className="container mx-auto p-4 md:p-8">
                {/* The Blogs component receives the array (postsList) 
                  and maps over it to display all cards.
                */}
                <Blogs postList={postsList} />
            </div>
        </main>
    );
};

export default CategoryPage;
