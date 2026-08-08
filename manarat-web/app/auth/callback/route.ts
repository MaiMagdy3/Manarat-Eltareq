import { NextResponse } from "next/server";

// This route is intentionally simple so the app can still build for static export.
// In a production deployment with a server runtime, Supabase auth can be handled here.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const redirectTo = searchParams.get("redirect_to") ?? "/";

  if (code) {
    // Auth callback handling is intentionally disabled for static export.
    // In a server-hosted deployment, this can be wired to Supabase auth.
  }

  return NextResponse.redirect(`${origin}${redirectTo}`);
}
