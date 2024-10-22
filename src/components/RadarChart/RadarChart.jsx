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

    const kindListFR = {
        1: "Cardio",
        2: "Énergie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
    }

    return (
        <RadarChart
            cx={100}
            cy={100}
            outerRadius="75%"
            width={258}
            height={260}
            data={performance.data.map(elem => ({
                value: elem.value,
                kind: kindListFR[elem.kind]
            })).reverse()
        }>
            <PolarGrid strokeWidth={1.5} />
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