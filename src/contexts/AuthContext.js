import { createContext, useState } from "react"
import Cookies from 'js-cookie'
import Router from "next/router"


export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [userJwt, getUserJwt] = useState()

    const isAuthenticated = !!userJwt;

    async function signIn(username, password) {
        const token = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(username, password)
        }).then(res => res.json())

        Cookies.set("bros.token", token.token, {
            expires: 1 // expires em 1 dia
        })
        
        getUserJwt(token.token)

        Router.push('/bros/jogador/ficha')
    }


    return (
        <AuthContext.Provider value={({ isAuthenticated, signIn, userJwt })}>
            {children}
        </AuthContext.Provider>
    )
}