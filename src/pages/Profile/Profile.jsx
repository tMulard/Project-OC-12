import { useParams } from 'react-router-dom';
import useUserData from '../../hooks/useUserData';
import './Profile.css'
import { useEffect } from 'react';
import KeyCard from '../../components/KeyCard/KeyCard'

const Profile = () => {
    const {id} = useParams()
    const {setUserId, user} = useUserData()

    useEffect(() => {
        setUserId(id)
    },[id])
    
    if(!user?.userInfos) {
        return <div>loading...</div>
    }

    return (
        <>
            <section className='Presentation'>
                <div className="Accueil">
                    <h1>Bonjour {user.userInfos.firstName}</h1> 
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
    );
}

export default Profile