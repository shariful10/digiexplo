import { NextResponse, NextRequest } from "next/server";
import cookie from "cookie";
import cookieSignature from "cookie-signature";
import { COOKIE_SECRET } from "./components/helper";

import { validateUser } from "./lib/validateUser";
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("user")?.value;
  // const user = jwt.verify(token as string,"3ab1184db972063f9215203945d9af4eb663200f9f96ba980ce5303d862d45dc")

  const user =
    token &&
    (await validateUser(token).catch((err) => {
      console.log(err);
      if (request.nextUrl.pathname.startsWith("/dashboard") && !user) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }));

  console.log(user);

  if (request.nextUrl.pathname.startsWith("/dashboard") && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
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
