import { NextRequest, NextResponse } from "next/server";

import { validateUser } from "./lib/validateUser";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("user_id")?.value;

  const user_id =
    token &&
    (await validateUser(token).catch((err) => {
      console.log(err);
    }));
  console.log(user_id);
  if (request.nextUrl.pathname.startsWith("dashboard") && !user_id) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // return {
  //   props: {
  //     user: user,
  //   },
  // };
}

export const config = {
  matcher: ["/dashboard"],
};
