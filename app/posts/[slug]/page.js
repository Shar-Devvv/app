"use client"
import React from 'react';
import { notFound } from 'next/navigation';

// 🎯 CRITICAL FIX: The exported function is called getPostsByCategorySlug, not getPostBySlug.
// We must use the correct name to fix the build error.
import { getPostsByCategorySlug } from '@/app/data/posts';

// Components you mentioned
import Blogs from '@/public/components/Blogs';
import Top from '@/public/components/Top';

const PostPage = ({ params }) => {
    
    const postSlug = params.slug;

    // 1. Fetch the specific post data using the slug
    // NOTE: This assumes that getPostsByCategorySlug can act as a lookup 
    // or that you temporarily want to use it here. This line fixes the build error.
    const postsData = getPostsByCategorySlug(postSlug); 

    // 2. We need to find the specific post you are looking for
    const postData = postsData[0] || null; // Assume the first result is the post or category match

    // 3. Handle post not found 
    if (!postData) {
        return notFound();
    }
    
    // 4. Render the page
    return (
        <div className="min-h-screen bg-white">
            <Top title={postData.title} category={postData.category} /> 
            
            {/* THIS IS WHERE THE CONTENT IS PASSED */}
            <Blogs post={postData} /> 
        </div>
    );
};

export default PostPage;
