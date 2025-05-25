// Or like this if you need to do something here.
// export default auth((req) => {
//   console.log(req.auth) //  { session: { user: { ... } } }
// })
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

import { Session } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname, search, origin, basePath } = req.nextUrl

  const signInPage = "/api/auth/signin"
  const errorPage = "/api/auth/error"
  
  const cookieHeader = req.headers.get("cookie");
  
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/auth/session", {
      headers: {
        cookie: cookieHeader || ""
      }
    });

    let session = await response.json() as Session | null;
    if (!session) {
      const signInUrl = new URL(`${basePath}${signInPage}`, origin)
      signInUrl.searchParams.append(
        "callbackUrl",
        `${basePath}${pathname}${search}`
      )
      return NextResponse.redirect(signInUrl)
    }
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      const errorUrl = new URL(`${basePath}${errorPage}`, origin)
      return NextResponse.redirect(errorUrl)
    }
    throw error;
  }

  return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        "/middleware-example"
    ]
};
