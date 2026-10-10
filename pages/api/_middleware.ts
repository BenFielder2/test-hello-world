import { NextResponse } from 'next/server';

export function middleware(req) {
  const path = req.nextUrl.pathname;

  if (path.startsWith('/api')) {
    return NextResponse.next();
  }

  if (req.method !== 'GET') {
    return NextResponse.status(405).json({ error: 'Method Not Allowed' });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*'
};