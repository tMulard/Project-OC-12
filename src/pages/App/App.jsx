import './App.css'
import { Link } from 'react-router-dom'

const App = () => {

  return (
   <div className='proxy'>
      <Link to='/user/12/profile'>Karl</Link>
      <Link to='/user/18/profile'>Cecilia</Link>
   </div>
  )
}

export default App
