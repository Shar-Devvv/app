"use client"
import React from 'react';
import { notFound } from 'next/navigation';
// 🎯 CRITICAL: This path goes up two directories (out of [slug], out of posts) 
// to reach the 'data' folder at the root level.
import { getPostBySlug } from '@/app/data/posts';

// Components you mentioned
import Blogs from '@/public/components/Blogs';
import Top from '@/public/components/Top';

const PostPage = ({ params }) => {
    
    const postSlug = params.slug;

    // 1. Fetch the specific post data using the slug
    const postData = getPostBySlug(postSlug);

    // 2. Handle post not found (If the slug doesn't match a post, this runs)
    if (!postData) {
        // If postData is undefined (due to wrong slug or path error), 
        // this will show a Next.js 404 page, which is good for debugging.
        return notFound();
    }
    
    // 3. Render the page
    return (
        <div className="min-h-screen bg-white">
            <Top title={postData.title} category={postData.category} /> 
            
            {/* THIS IS WHERE THE CONTENT IS PASSED */}
            <Blogs post={postData} /> 
        </div>
    );
};

export default PostPage;
