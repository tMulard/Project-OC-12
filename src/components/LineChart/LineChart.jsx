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

    const [hoveredLine, setHoveredLine] = useState(null);

    const renderDot = ({ cx, width, index }) => {
      const newWidth = width - index;
  
      return (
        <svg
          x={cx}
          y={0}
          width={newWidth}
          height={300}
          viewBox={`0 0 ${newWidth} 300`}
        >
          <rect
            x={0}
            width={newWidth}
            height={300}
            fill='rgba(1.0,0.1,0.1,0.25)'
            opacity={index === hoveredLine ? 0.3 : 0}
            onMouseEnter={() => setHoveredLine(index)}
            onMouseLeave={() => setHoveredLine(null)}
          />
        </svg>
      );
    };

    return (
      <LineChart
        width={258}
        height={260}
        data={avgSessions.sessions.map(session => ({
          day: days[session.day -1],
          sessionLength : session.sessionLength,
          index: session.day
        }))}
        // onMouseMove={(e) => {
        //   setActiveValue(e.activePayload[0].payload.index - 1)
        // }}
      >
        <XAxis 
        dataKey="day" 
        padding={{ left: 10, right: 10 }} 
        />
        <Tooltip 
        content={CustomTooltip} 
        cursor={false}
        />
        <Legend/>
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          activeDot={{ r: 4 }}
          dot={renderDot}
          name="Durée moyenne des sessions"
          
        />
      </LineChart>
    );
}

export default UserLineChart