import "./LineChart.css"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
import useUserData from '../../hooks/useUserData';
import { useState } from "react";


const CustomTooltip = ({payload, active}) => {
  if (!active || !payload) return null
  return (
    <div className="HoverClass">
      <p className="HoverValue">{payload[0].payload.sessionLength} min</p>
    </div>
  )
}


const UserLineChart = () => {
//   Provider to get whatever data needed
    const {avgSessions} = useUserData()
    const [activeValue, setActiveValue] = useState()

    const days = "LMMJVSD";

    return (
      <LineChart
        width={258}
        height={260}
        data={avgSessions.sessions.map(session => ({
          day: days[session.day -1],
          sessionLength : session.sessionLength,
          index: session.day
        }))}
        onMouseMove={(e) => {
          setActiveValue(e.activePayload[0].payload.index - 1)
        }}
      >
        <XAxis 
        dataKey="day" 
        padding={{ left: 10, right: 10 }} 
        />
        <Tooltip 
        content={CustomTooltip} 
        cursor={true}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          activeDot={{ r: 4 }}
          dot={false}
          name="Durée de session"
        />
      </LineChart>
    );
}

export default UserLineChart