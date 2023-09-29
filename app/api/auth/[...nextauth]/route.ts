import NextAuth, { type NextAuthOptions } from "next-auth";
// import { Provider } from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export const authOptions:NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    // adapter: PrismaAdapter(Prisma),
    providers: [
        CredentialsProvider({
            name: 'sign in',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = await yourAuthorizationLogic(credentials);
                return user;  // Return null if authentication fails
                
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
}

async function yourAuthorizationLogic() {
    // Assuming you have a User type defined
    const user = { id: "1", username: "John Doe", email: "test@test.com" };
    return user;
  }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}