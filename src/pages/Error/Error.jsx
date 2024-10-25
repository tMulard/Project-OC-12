import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <section className='ErrorBody'>
            <h1 className='ErrorTitle'>404</h1>
            <h2 className='ErrorText'>La page auquel vous avez tenté d'accéder n'existe pas.</h2>
            <Link to='/' className='HomeLink'>Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default Error