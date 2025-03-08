import { useParams } from 'react-router-dom';
import useUserData from '../../hooks/useUserData';
import './MockProfile.css'
import { useEffect } from 'react';
import KeyCard from '../../components/KeyCard/KeyCard'

import UserBarChart from '../../components/BarChart/BarChart';
import UserLineChart from '../../components/LineChart/LineChart';
import UserRadarChart from '../../components/RadarChart/RadarChart';
import UserRadialBarChart from '../../components/RadialBarChart/RadialBarChart';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';


const MockProfile = () => {
    const {id} = useParams()
    const {setUserId, user, activity, avgSessions, performance} = useUserData()

    useEffect(() => {
        setUserId(id)
    },[id])
    
    if(!user?.userInfos || !user?.todayScore || !user?.keyData || !activity || !avgSessions || !performance) {
        return <div>loading...</div>
    }

    return (
      <>
        <Header />
        <section className="Body">
          <SideBar />
          <section className="App">
            <div className="Presentation">
              <div className="User">
                {/* User's name */}
                <h1>
                  Bonjour{" "}
                  <span className="UserName">Karl</span>
                </h1>
              </div>
              <h2 className="ResultPhrase">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </h2>
            </div>
            <div className="Activity">
              {/* User's activity numbers, in different chart forms */}
              <div className="BarChartActivity">
                <h3>Activité quotidienne</h3>
                <UserBarChart />
              </div>
              <div className="LineChartActivity">
                <UserLineChart />
              </div>
              <div className="RadarChartActivity">
                <UserRadarChart />
              </div>
              <div className="RadialBarChartActivity">
                <UserRadialBarChart />
              </div>
            </div>
          </section>
          <section className="KeyNumbers">
            {/* User's key numbers in card form, containing burnt calories, as well as consumption of proteins, carbs and lipids */}
            <KeyCard title="Calories" type="calories">
              1930kCal
            </KeyCard>
            <KeyCard title="Proteines" type="proteins">
              155g
            </KeyCard>
            <KeyCard title="Glucides" type="carbs">
              290g
            </KeyCard>
            <KeyCard title="Lipides" type="">
              50g
            </KeyCard>
          </section>
        </section>
      </>
    );
}

export default MockProfile