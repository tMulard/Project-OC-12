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
            cx={100}
            cy={100}
            outerRadius={150}
            width={258}
            height={260}
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