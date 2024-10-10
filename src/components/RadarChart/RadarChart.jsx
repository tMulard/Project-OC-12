import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";

import useUserData from '../../hooks/useUserData';

const UserRadarChart = () => {
    //   Provider to get whatever data needed
    const {performance} = useUserData()
    // console.log(performance.data)
    return (
        <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={performance.data}
            >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis />
            <Radar
                name="Performance"
                dataKey="value"
                stroke="red"
                fill="red"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
  
}

export default UserRadarChart