import { useNavigate } from 'react-router-dom'

import Background from '../../Components/Background'
import Footer from '../../Components/Footer'
import arrow from '../../Assets/arrow.png'
import './styles.css'

function Home() {
    const navigate = useNavigate()

    return (
        <>
            <div className="home_container">
                <h1>Bem vindo!</h1>
                <p>Esse projeto foi feito com o intuito de praticar minhas habilidades com autenticação, aplicações CRUD, react patterns, Context API e custom hooks. UI/UX, layout e responsividade das páginas não foram os focos do projeto! Por esse motivo, o design das páginas foram feitos de maneira muito rápida e sem muita atenção, consequentemente não apresentando as melhores práticas de web design.</p>
                <button onClick={() => navigate('/login')}>Comece a usar! <img src={arrow} alt="Arrow"/> </button>
            </div>
            <Footer />
            <Background />
        </>
    )
}

export default Home;