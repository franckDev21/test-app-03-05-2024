import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const access_token = request.cookies.get('access_token')?.value
 
  if(request.nextUrl.pathname.startsWith('/auth') && access_token){
    return NextResponse.redirect(new URL('/', request.url))
  }
 
  if(request.nextUrl.pathname.startsWith('/user') && !access_token){
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}
 
