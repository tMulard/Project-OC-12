import { useParams } from 'react-router-dom';
import useUserData from '../../hooks/useUserData';
import './Profile.css'
import { useEffect } from 'react';
import KeyCard from '../../components/KeyCard/KeyCard'
import CalIcon from '../../assets/calories-icon.svg'
import ProtIcon from '../../assets/protein-icon.svg'
import CarbIcon from '../../assets/carbs-icon.svg'
import FatIcon from '../../assets/fat-icon.svg'


const Profile = () => {
    const {id} = useParams()
    const {setUserId, user} = useUserData()

    useEffect(() => {
        setUserId(id)
    },[id])
    
    if(!user?.userInfos || !user?.todayScore || !user?.keyData) {
        return <div>loading...</div>
    }

    return (
        <>
            <section className='Presentation'>
                <div className="Accueil">
                      {/* User's name */}
                    <h1>Bonjour <h2 className='UserName'>{user.userInfos.firstName}</h2></h1> 
                    <h2 className="ResultPhrase">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                </div>
            </section>
            <section className='KeyNumbers'>
                <KeyCard title="Calories" src={`${CalIcon}`}>
                    {user.keyData.calorieCount}kCal
                </KeyCard>
                <KeyCard title="Proteines" src={`${ProtIcon}`}>
                    {user.keyData.proteinCount}g
                </KeyCard>
                <KeyCard title="Glucides" src={`${CarbIcon}`}>
                    {user.keyData.carbohydrateCount}g
                </KeyCard>
                <KeyCard title="Lipides" src={`${FatIcon}`}>
                    {user.keyData.lipidCount}g
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