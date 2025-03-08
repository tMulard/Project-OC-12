import './App.css'
import { Link } from 'react-router-dom'

import logo from "../../../public/Icons/logo_SportSee.png"

const App = () => {

  return (
   <div className='proxy'>
      <img src={logo} alt="logo" />
      <h2>Connectez-vous :</h2>
      <Link to='/user/12/profile'>Karl</Link>
      <Link to='/user/18/profile'>Cecilia</Link>
      
      <Link to='/Mockprofile'>Mock version</Link>
   </div>
  )
}

export default App
