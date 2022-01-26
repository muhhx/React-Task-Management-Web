import { useState } from 'react'
import { useAuth } from '../../Context/Auth'
import { Link, useNavigate } from 'react-router-dom'
import { bd } from '../../Config/firebase'
import { collection, addDoc } from 'firebase/firestore'

import ErrorMessage from '../../Components/ErrorMessage'
import Footer from '../../Components/Footer'
import Background from '../../Components/Background'
import arrow from '../../Assets/arrow.png'
import './styles.css'

function Signup() {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputConfirmPassword, setInputConfirmPassword] = useState('')
    const [inputName, setInputName] = useState('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const { signup } = useAuth()
    const userCollection = collection(bd, "users")

    async function handleSubmit(e) {
        e.preventDefault()

        
        if(inputPassword !== inputConfirmPassword) {
            return setError('Passwords dont match!')
        }
        
        if(inputPassword.length < 6) {
            return setError('A senha deve conter no mínimo 6 caracteres')
        }
        
        try {
            setError('')
            setLoading(true)
            await signup(inputEmail, inputPassword)
            await addDoc(userCollection, {nome: inputName, email: inputEmail})
            navigate('/dashboard')
        } catch(error) {
            setError('O email ja está cadastrado!')
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <>
            <main className="signup_container">
                <h1 className="signup_title">Signup</h1>
                {error !== '' ? <ErrorMessage message={error}/> : ''}
                <form className="signup_wrapper">
                    <input placeholder="Email" onChange={(e) => setInputEmail(e.target.value)}/>
                    <input required type="password" placeholder="Password" onChange={(e) => setInputPassword(e.target.value)}/>
                    <input required type="password" placeholder="Confirm your password" onChange={(e) => setInputConfirmPassword(e.target.value)}/>
                    <input required placeholder='Name' onChange={(e) => setInputName(e.target.value)}/>
                    <button disabled={loading} onClick={(e) => handleSubmit(e)}>Signup <img src={arrow} alt="Arrow" /> </button>
                </form>
                <p className="signup_text">Já possui uma conta? <Link to={'/login'}>Login</Link></p>
            </main>
            <Footer />
            <Background />
        </>
    )
}

export default Signup;