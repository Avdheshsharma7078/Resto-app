import { deliveryPartnersSchema } from "@/app/lib/deliverypartnersModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connectionStr = process.env.MONGO_URL;
export async function GET(request, content) {
  let city = content.params.city;
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let filter = { city: { $regex: new RegExp(city, "i") } };
  const result = await deliveryPartnersSchema.find(filter);
  return NextResponse.json({ result });
}
