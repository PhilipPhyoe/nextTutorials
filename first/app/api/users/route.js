import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ Success: "Get function is connected." });
}
