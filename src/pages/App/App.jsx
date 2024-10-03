import { useContext } from 'react'
import './App.css'
import useUserData from '../../hooks/useUserData.jsx'
import { DataContext } from '../../provider/DataProvider.jsx'
import { useParams } from 'react-router-dom'
import KeyCard from '../../components/KeyCard/KeyCard.jsx'

const App = () => {
  const {id} = useParams()
  // const {user, activity, avgSessions, performance} = useContext()
  const userData = useUserData()
  
  console.log(userData.user.userInfos)

  return (
    <>
            {userData ? (
                <>
                  <section className='Presentation'>
                    <div className="Accueil">
                      <div>Bonjour {user.userInfos.firstName}</div> 
                      {/* insert name */}
                      <div className="resultPhrase">
                      </div>
                    </div>
                  </section>
                  <section className='KeyNumbers'>
                    <KeyCard title="Calories">

                    </KeyCard>
                    <KeyCard title="Proteines">
                    
                    </KeyCard>
                    <KeyCard title="Glucides">
                      
                    </KeyCard>
                    <KeyCard title="Lipides">
                      
                    </KeyCard>
                  </section>
                  <section className='Activity'>
                    <div className="BarChart">
                      <h3>Activité quotidienne</h3>

                    </div>
                    <div className="LineChart">

                    </div>
                    <div className="RadarChart">

                    </div>
                    <div className="RadialBarChart">

                    </div>
                  </section>
                  </>
                )
                : (
                    <div>Loading...</div>
                )}
            
        </>
  )
}

export default App
