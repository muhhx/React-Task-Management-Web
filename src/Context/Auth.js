import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../Config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const AuthContext = createContext()

//Ao invés de importar useContext e AuthContext, usar esse useAuth, vai retornar as mesmas coisas
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}