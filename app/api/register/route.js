import db from "@/libs/db";
import EcomUser from "@models/EcomUser";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await db();

  const { email, password, name } = await req.json();

  const isExisting = await EcomUser.findOne({ email });

  if (isExisting) {
    return new NextResponse("User already exist", { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new EcomUser({
    email,
    password: hashedPassword,
    name,
  });

  console.log(newUser);

  try {
    newUser.save();
    return new NextResponse("registered successfully", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("servern error", { status: 500 });
  }
};
