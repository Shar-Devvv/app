import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// 1. RE-ENABLE THESE DB IMPORTS
import connectDb from "@/app/db/connectDb";
import User from "@/app/db/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // 2. RESTORING signIn CALLBACK (with DB check/creation)
    async signIn({ user, account, profile }) {
      try {
        // Ensure connection is established
        await connectDb();

        // Check if user already exists
        const existingUser = await User.findOne({ email: user.email });

        // If user is new, create a database entry
        if (!existingUser) {
          await User.create({
            email: user.email,
            // Use the name provided by Google as a fallback username
            username: user.name || user.email.split("@")[0],
            provider: account.provider,
            // Include user image from Google profile
            image: user.image 
          });
        }

        return true;
      } catch (err) {
        // Log any database errors but allow sign-in to continue
        console.error("Error in signIn callback (DB logic):", err);
        return true; // Keep the user logged in to the session even if DB fails
      }
    },

    // 3. RESTORING session CALLBACK (attach MongoDB data)
    async session({ session, token }) {
      try {
        await connectDb();
        const dbUser = await User.findOne({ email: session.user.email });

        if (dbUser) {
          // Attach MongoDB user ID and username to the session
          session.user.id = dbUser._id.toString();
          session.user.username = dbUser.username;
        }
      } catch(err) {
        console.error("Error in session callback (DB logic):", err);
        // Continue with the session token even if DB fetch fails
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
