"use client"

import { SessionProvider } from "next-auth/react"

interface AuthProviderProps {
    children: React.ReactNode
}


export default function Authprovider( {children} : AuthProviderProps) {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}