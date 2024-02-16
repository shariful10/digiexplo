import { validateUser } from "@/lib/validateUser";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("user")?.value;
    const user =
      token &&
      (await validateUser(token).catch((err) => {
        console.log(err);
      }));
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
