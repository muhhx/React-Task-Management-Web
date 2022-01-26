import { useState } from 'react'
import { useAuth } from '../../Context/Auth'
import { Link, useNavigate } from 'react-router-dom'

import ErrorMessage from '../../Components/ErrorMessage'
import Footer from '../../Components/Footer'
import Background from '../../Components/Background'
import arrow from '../../Assets/arrow.png'
import './styles.css'

function Login() {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(inputEmail, inputPassword)
            navigate('/dashboard')
        } catch(error) {
            setError('Something went wrong while trying to log you in. Account not found!')
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <>
            <main className="login_container">
                <h1 className="login_title">Login</h1>
                {error !== '' ? <ErrorMessage message={error}/> : ''}
                <form className="login_wrapper">
                    <input placeholder="Email" onChange={(e) => setInputEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setInputPassword(e.target.value)}/>
                    <button disabled={loading} onClick={(e) => handleLogin(e)}>Login <img src={arrow} alt="Arrow" /></button>
                </form>
                <p className="login_text">Não tem uma conta? <Link to={'/signup'}>Sign Up</Link></p>
            </main>
            <Footer />
            <Background />
        </>
    )
}

export default Login;