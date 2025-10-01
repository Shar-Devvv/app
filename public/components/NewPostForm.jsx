// components/NewPostForm.jsx 
// (or wherever you keep your Client Components)
"use client";

import React, { useState } from 'react';

const NewPostForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        story: '', // This will map to 'content' in your API
        category: 'anime', // Default, or make this a selection field
        imageUrl: '',
        authorId: 'user-123', // Use actual user ID from context/auth
        authorName: 'Guest Author',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // 🚨 Submits data to the POST handler at /api/posts
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(`Success! ${result.message}`);
                // Clear form or redirect user
                setFormData({ title: '', story: '', category: 'anime', imageUrl: '', authorId: 'user-123', authorName: 'Guest Author' });
            } else {
                setMessage(`Error: ${result.error || 'Failed to publish post.'}`);
            }
        } catch (error) {
            setMessage('Network error or server connection failed.');
            console.error('Publishing failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4">Publish a New Blog Post</h2>
            
            {/* Title Field */}
            <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>
            
            {/* Story/Content Field */}
            <div className="mb-4">
                <label className="block text-gray-700">Story/Content</label>
                <textarea 
                    name="story" 
                    value={formData.story} 
                    onChange={handleChange} 
                    required
                    rows="6"
                    className="w-full px-3 py-2 border rounded-md"
                ></textarea>
            </div>

            {/* Category Field (can be a select) */}
            <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input 
                    type="text" 
                    name="category" 
                    value={formData.category} 
                    onChange={handleChange} 
                    required
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>
            
            {/* Submit Button */}
            <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-2 px-4 rounded-md text-white font-semibold ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
                {loading ? 'Publishing...' : 'Publish Post'}
            </button>
            
            {/* Message/Status */}
            {message && (
                <p className={`mt-4 text-center ${message.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
                    {message}
                </p>
            )}
        </form>
    );
};

export default NewPostForm;