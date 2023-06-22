import EcomUser from "@models/EcomUser";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import db from "@/libs/db";
import jwt from "jsonwebtoken";

export const POST = async (req) => {
  try {
    await db();
    const { email, password } = await req.json();
    const user = await EcomUser.findOne({ email });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return new NextResponse("Invalid credentials", { status: 401 });
    }

    console.log(user);

    const data = {
      id: user._id,
      email: user.email,
      name: user.name,
      isLogged: true,
      role: user.role,
    };

    const token = jwt.sign(data, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log(token);

    return new NextResponse(JSON.stringify(token), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Server error", { status: 500 });
  }
};
