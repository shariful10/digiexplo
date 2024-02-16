import { NextResponse, NextRequest } from "next/server";
import cookie from "cookie";
import cookieSignature from "cookie-signature";
import { COOKIE_SECRET } from "./components/helper";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookies = request.cookies;

  const strCookie = cookies.toString();

  const parsedCookies = cookie.parse(strCookie);

  const userData = cookieSignature.unsign(
    parsedCookies.user,
    COOKIE_SECRET as string
  );

  console.log(userData);
}

export const config = {
  matcher: "/",
};
