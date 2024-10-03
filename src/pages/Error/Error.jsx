import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <section className='ErrorBody'>
            <h1 className='ErrorTitle'>404</h1>
            <h2 className='ErrorText'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/' className='HomeLink'>Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default Error