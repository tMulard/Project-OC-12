import './Header.css'
import logo from "../../../public/Icons/logo_SportSee.png"
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='NavBar'>
            <img src={logo} alt="logo" />
            <Link to="/">Accueil</Link>
            <Link to="/user/:id/profile">Profil</Link>
            <Link to="/user/:id/settings">Réglages</Link>
            <Link to="/user/:id/forum">Communauté</Link>
        </div>
    )
}

export default Header