import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";

const Prisma = new PrismaClient();

export async function POST(req: Request) {
    const body = await req.json();
    const { username, email, password } = body.data;
    console.log(body.data);

    if (!username || !email || !password) {
        return new NextResponse("Missing username, email or password", {status: 400});
    }

    const exist = await Prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if(exist) {
        return new NextResponse("User already exists", {status: 400});
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    interface UserData {
        username: string;
        email: string;
        password: string;
    }

    const user:UserData = {
        username: username,
        email: email,
        password
    }

    const newUser = await Prisma.user.create({
        data: user
    });

    return new NextResponse(JSON.stringify(newUser), {status: 200});
}