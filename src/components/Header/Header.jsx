import './Header.css'
import { Link, useParams } from 'react-router-dom'
import useUserData from '../../hooks/useUserData'
import { useEffect } from 'react'

import logo from "../../../public/Icons/logo_SportSee.png"
import { DataSwitcher } from '../DataSwitcher'

const Header = () => {
    const {id} = useParams()
    const {setUserId} = useUserData()
    useEffect(() => {
        setUserId(id)
    },[id])



    return (
        <div className='NavBar'>
            <img src={logo} alt="logo" />
            <Link to="/">Accueil</Link>
            <Link to={`/user/${id}/profile`}>Profil</Link>
            <Link to={`/user/${id}/settings`}>Réglages</Link>
            <Link to={`/user/${id}/forum`}>Communauté</Link>
            <DataSwitcher />
        </div>
    )
}

export default Header