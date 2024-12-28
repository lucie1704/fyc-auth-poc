"use client"

import { signIn, signOut } from "next-auth/react"

export const LoginButton = () => {
    return (
        <button onClick={() => signIn()}>Se connecter</button>
    )
}

export const LogoutButton = () => {
    return (
        <button onClick={() => signOut()}>Se déconnecter</button>
    )
}