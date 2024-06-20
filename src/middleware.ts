import { NextResponse, NextRequest } from "next/server";
import { getToken } from "./utils/token";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = getToken();
  if (token) {
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (pathname === "/dashboard") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/", "/dashboard"],
};
