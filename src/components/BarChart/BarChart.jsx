import "./BarChart.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useUserData from '../../hooks/useUserData';
import { useState } from "react";

const CustomTooltip = ({payload, active}) => {
  if (!active || !payload) return null 
    return (
      <div className="HoverBar">
        <p className="HoverBarWeight">{payload[0].payload.kilogram}kg</p>
        <p className="HoverBarCal">{payload[0].payload.calories}kCal</p>
      </div>
    )
}


const UserBarChart = () => {
    //   Provider to get whatever data needed
    const {activity} = useUserData()
    const [activeValue, setActiveValue] = useState()

    return (
        <BarChart
          width={900}
          height={260}
          data={activity.sessions.map(session => ({
            day: parseInt(session.day.substr(9)),
            kilogram : session.kilogram,
            calories: session.calories
          }))}
          barGap={7}
          barCategoryGap={0}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="grey" strokeDasharray="3 3" />
          <XAxis dataKey="day"/>
          <YAxis orientation="right"/>
          <Tooltip content={CustomTooltip}/>
          <Legend iconType="circle"/>
          <Bar dataKey="kilogram" name={"Poids (kg)"} fill="black" barSize={7} radius={[20, 20, 0, 0]}/>
          <Bar dataKey="calories" name={"Calories brûlées (kCal)"} fill="red" barSize={7} radius={[20, 20, 0, 0]} />
        </BarChart>
    );
  
}

export default UserBarChart