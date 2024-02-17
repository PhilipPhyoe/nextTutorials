import { NextResponse } from "next/server";

export function GET(_, res) {
  console.log(res.params.id);
  return NextResponse.json({ result: "Hello" });
}
