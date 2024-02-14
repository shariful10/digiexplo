// // middleware.ts

import { NextApiRequest, NextApiResponse } from "next";

import cookieParser from "cookie-parser";

export default function middleware(req: NextApiRequest, res: NextApiResponse) {
  // Parse cookies

  console.log("outside", req.cookies);

  cookieParser(process.env.COOKIE_SECRET)(req, res, () => {
    // Get cookies from request
    const cookies = req.cookies;

    console.log("inside", cookies);
    // Check user cookie etc

    // Rest of middleware logic
  });
}

// export default function middleware(req: NextApiRequest, res: NextApiResponse) {
//   // return console.log("hello");
// }
