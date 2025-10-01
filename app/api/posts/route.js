import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDb from "@/app/db/connectDb";
import Post from "@/app/db/models/Post"; // FIX: Reverting to the common path for Mongoose models.

// The handler for POST requests (creating a new post)
export async function POST(request) {
    try {
        // 1. AUTHENTICATION CHECK
        const session = await getServerSession();
        if (!session) {
            // Return 401 Unauthorized if the user is not signed in
            return NextResponse.json(
                { error: "Authentication required to publish a post." },
                { status: 401 }
            );
        }

        // 2. CONNECT TO DATABASE
        await connectDb();

        // 3. PARSE REQUEST BODY
        const body = await request.json();
        // The client form sends {title, story, category, ...}
        const { title, story, category, date, imageUrl } = body;
        
        // Basic input validation
        if (!title || !story || !category) {
            return NextResponse.json(
                { error: "Missing required fields: title, story, or category." },
                { status: 400 }
            );
        }

        // 4. CREATE NEW POST DOCUMENT
        const newPost = await Post.create({
            title,
            story, // Using 'story' to match the schema's required field.
            category,
            date: date || new Date().toISOString().split('T')[0], // Use provided date or current date
            imageUrl,
            author: session.user.name || "Anonymous", // Use the signed-in user's name
        });

        // 5. SUCCESS RESPONSE
        return NextResponse.json(
            { message: "Post created successfully!", post: newPost },
            { status: 201 }
        );

    } catch (error) {
        // 6. ERROR HANDLING - This ensures we ALWAYS return valid JSON
        console.error("API ROUTE ERROR:", error);

        // Check for specific Mongoose/DB validation errors
        if (error.name === 'ValidationError') {
            return NextResponse.json(
                { error: `Validation Failed: ${error.message}` },
                { status: 400 }
            );
        }

        // Catch-all for database connection, saving, or unexpected errors
        return NextResponse.json(
            { error: "Internal Server Error. Check server logs for details." },
            { status: 500 }
        );
    }
}
