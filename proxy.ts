import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routableHrefs } from "@/lib/routing";

// Whitelist, not blacklist: any page-style path (no dot — page routes never have one,
// unlike icon.svg/sitemap.xml/robots.txt/etc.) must be explicitly listed in routableHrefs
// to be served. A new app/foo/page.tsx that's never added to site.config.ts 404s by
// default instead of silently going live.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.includes(".") || routableHrefs.has(pathname)) return;

  // Rewrite (not redirect) to a path with no matching route, so the URL bar
  // stays put and Next's normal not-found handling serves a real 404.
  return NextResponse.rewrite(new URL("/disabled-page", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
