import './styles.css'

function ErrorMessage({ message }) {
    return (
        <div className="error_message">
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage