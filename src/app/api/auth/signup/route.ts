import { db } from "@/lib/db";
import { setAuthCookie } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { firstName, lastName, email, password } = await req.json();

  const result = db
    .prepare(
      "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)"
    )
    .run(firstName, lastName, email, password);

  setAuthCookie(result.lastInsertRowid as number);

  return NextResponse.json({ success: true });
}
