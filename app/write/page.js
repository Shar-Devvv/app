// This code is a placeholder based on your screenshot and fixes the fetch URL.
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

export default function WritePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const categories = ["style", "fashion", "food", "culture", "travel", "coding"];

    const handlePublish = async () => {
        if (status !== 'authenticated') {
            setMessage("Please sign in to publish a post.");
            return;
        }

        const post = { title, story, category, date, imageUrl };

        setLoading(true);
        setMessage('');

        try {
            // FIX IS HERE: Changed the fetch URL from "/app/posts" to "/api/posts"
            const res = await fetch("/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post),
            });

            setLoading(false);

            const result = await res.json();

            if (res.ok) {
                alert(`Success! ${result.message}`);
                router.push('/'); // Redirect to homepage or post page
            } else {
                setMessage(result.error || "Failed to publish post.");
                console.error("API Error:", result.error);
            }
        } catch (error) {
            setLoading(false);
            // If the server crashes, we hit this catch block and the user sees a "Network Error".
            console.error("Network or Fetch Error:", error);
            setMessage("A critical error occurred (server or network crash). Please check your server logs.");
        }
    };

    if (status === 'loading') {
        return <div className="p-8 text-center">Loading authentication...</div>;
    }

    // --- Placeholder UI ---
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl mt-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Write a New Post</h1>
            
            {message && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {message}
                </div>
            )}

            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Title of the Post"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                
                <textarea
                    placeholder="Your amazing story..."
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    rows="10"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                    ))}
                </select>

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
                 <input
                    type="url"
                    placeholder="Image URL (Optional)"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />

                <button
                    onClick={handlePublish}
                    disabled={loading || !title || !story || !category}
                    className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition duration-200 
                        ${loading || !title || !story || !category ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 active:bg-green-800 shadow-md hover:shadow-lg'}
                    `}
                >
                    {loading ? 'Publishing...' : 'Publish Post'}
                </button>
            </div>
        </div>
    );
}
