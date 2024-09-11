import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connectionStr = process.env.MONGO_URL;
export async function GET(request, content) {
  const id = content.params.id;
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const result = await foodSchema.findOne({ _id: id });
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}

export async function PUT(request, content) {
  const id = content.params.id;
  const payload = await request.json();
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const result = await foodSchema.findOneAndUpdate({ _id: id }, payload);
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
