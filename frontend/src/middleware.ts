
import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log(request.cookies.user)

    if(!request.cookies.user){
      return NextResponse.redirect(new URL('/login',request.url))
    }
}
 
export const config = {
  matcher: "/",
}
