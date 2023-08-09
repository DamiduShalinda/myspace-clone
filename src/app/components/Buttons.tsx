"use client"

import { useSession , signIn , signOut } from "next-auth/react"
import Image from 'next/image'

export function SignInOutButton(){
    const  {data: session , status} = useSession()

    if(status === "loading"){
        return <div>Loading...</div>
    }

    if(status == 'authenticated'){
        return <div className="flex flex-row items-center gap-3">
            <Image src={session.user?.image ?? '/placeholder.png'} width={32} height={32} alt="Your Profile"/>
            <button onClick={() => signOut()}>Sign Out</button>
            </div>
    }

    return <button onClick={() => signIn()}>Sign In</button>
}