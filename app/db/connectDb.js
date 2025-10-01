import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const uri=process.env.NEXTAUTH_SECRET
if (!MONGODB_URI) {
  alert("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      // ⚡ FAST FIX: Adding an appName and increasing timeout helps bypass stubborn network/firewall blocks.
      appName: 'NextjsBlogApp',
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of the default 30s
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDb;
