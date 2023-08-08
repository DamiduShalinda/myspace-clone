"use client"

import { useSession , signIn , signOut } from "next-auth/react"

export function SignInOutButton(){
    const  {data: session , status} = useSession()

    if(status === "loading"){
        return <div>Loading...</div>
    }

    if(status == 'authenticated'){
        return <button onClick={() => signOut()}>Sign Out</button>
    }

    return <button onClick={() => signIn()}>Sign In</button>
}