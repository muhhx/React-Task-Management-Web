import background from '../../Assets/background.png'
import './styles.css'

function Background() {
    return (
        <img className="backgroundImage" src={background} alt="Background Image" />
    )
}

export default Background