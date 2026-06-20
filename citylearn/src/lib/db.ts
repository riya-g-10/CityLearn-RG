import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable inside .env");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null, isFallback: false };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (cached.isFallback) {
    return { isFallback: true };
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds to fallback quickly
    };

    cached.promise = mongoose.connect(MONGO_URI!, opts).then((m) => {
      console.log("MongoDB connected successfully");
      return m;
    }).catch((err) => {
      console.error("MongoDB connection error. Falling back to local database storage:", err.message || err);
      cached.promise = null;
      cached.isFallback = true;
      return { isFallback: true };
    });
  }

  try {
    cached.conn = await cached.promise;
    if (cached.conn && (cached.conn as any).isFallback) {
      cached.conn = null;
      return { isFallback: true };
    }
  } catch (e) {
    cached.promise = null;
    cached.isFallback = true;
    return { isFallback: true };
  }

  return cached.conn;
}

