import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './Auth'

import { bd } from '../Config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const UserContext = createContext()

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider(props) {
    const { currentUser } = useAuth()
    const [user, setUser] = useState()
    const [userName, setUserName] = useState()
    const [userEmail, setUserEmail] = useState()
    const userCollectionRef = collection(bd, "users")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            const result = data.docs.map(doc => ({...doc.data()}))
            const final = result.filter(user => user.email === currentUser.email)
            setUser(final[0])
        }
        if (currentUser) {
            getUsers()
        }
    }, [currentUser])

    useEffect(() => {
        if(user) {
            setUserName(user.nome)
            setUserEmail(user.email)
        }
    }, [user])

    const value = {
        user,
        userName,
        userEmail
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}