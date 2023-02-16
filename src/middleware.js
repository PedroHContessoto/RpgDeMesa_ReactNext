import { NextResponse } from 'next/server'
import React, { useContext } from "react";
import { SignJWT, jwtVerify } from 'jose';

export async function middleware(req) {
    const landing_page = new URL('/', req.url);
    const path = req.nextUrl.pathname;
    const BrosRole = '/bros';


    const request_path = path
        .replaceAll("/api/v1", "")
        // Path transveral
        .replaceAll("%2e", "")
        .replaceAll("..", "")
        .replaceAll("//", "/")


    let cookie = req.cookies.get('bros.token')?.value

    if (cookie == null || cookie == "undefined")
        return NextResponse.redirect(landing_page)

    const secret = process.env.NEXTAUTH_SECRET;

    const { payload } = await jwtVerify(cookie, new TextEncoder().encode(secret));

    const role = payload.user_role

    if (request_path.startsWith(role) && role == BrosRole)
        return NextResponse.next()
    else
        return NextResponse.redirect(landing_page)
}

export const config = {
    matcher: ['/bros/:path*', '/api/v1/bros/:path*']

}