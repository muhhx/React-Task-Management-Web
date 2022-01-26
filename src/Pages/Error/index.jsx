import { useNavigate } from 'react-router-dom'
import Background from '../../Components/Background'
import Footer from '../../Components/Footer'
import arrow from '../../Assets/arrow.png'
import './styles.css'

function Error() {
    const navigate = useNavigate()

    function handleNavigation() {
        navigate('/')
    }

    return (
        <>
            <div className='error_container'>
                <h1>Page not found</h1>
                <button onClick={handleNavigation}>Voltar à página inicial<img src={arrow} alt="Arrow" /> </button>
            </div>
            <Footer />
            <Background />
        </>
    )
}

export default Error;