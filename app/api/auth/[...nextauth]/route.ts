// this api has dynamic nextauth

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";
import User from "@models/user";

// to handle authentication
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }: any) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();
      return session;
    },
    // first signin to get the user session
    async signIn({ profile }: any) {
      try {
        // every route in next is serverless -> dynamic -> open only when it does called
        await connectToDB();
        // check if a user already exist
        const userExist = await User.findOne({
          email: profile.email,
        });

        // if not create a new user
        if (!userExist) {
          await User.create({
            email: profile.email,
            userName: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
