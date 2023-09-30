import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/data/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: "/api/auth/login",
    },
    providers: [
        CredentialsProvider({
            name: 'your-credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"username" | "password", string> | undefined): Promise<any> {
                if(!credentials || !credentials.username || !credentials.password) return new Error("Invalid credentials");
                const user = await prisma.user.findFirst({
                    where: {  username: credentials.username }
                })
                if(!user) return null;
                // const passwordMatch = await bcrypt.compare(credentials.password, user.hashedpassword);
                if(user?.password !== credentials.password) return null;
                return user                
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    // debug: process.env.NODE_ENV !== "production",
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}