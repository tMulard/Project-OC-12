import {
    RadialBarChart,
    RadialBar,
    Legend,
    PolarRadiusAxis,
    PolarAngleAxis,
  } from "recharts";
import useUserData from '../../hooks/useUserData';

const style = {
    top: 0,
    left: 350,
    lineHeight: "24px",
  };

const UserRadialBarChart = () => {
    //   Provider to get whatever data needed
    const {user} = useUserData()

    console.log(user.todayScore)
    return (
        <RadialBarChart
            width={258}
            height={260}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={user.todayScore * 100}
            >
            <RadialBar
                // minAngle={15}
                // label={{ position: "insideStart", fill: "#fff" }}
                background
                // clockWise
                dataKey="todayScore"
                // max
            />
            <PolarRadiusAxis/>
            <PolarAngleAxis
                tick={false}
                domain={[0., 1.0]}
                type="float"
                // @ts-expect-error this prop works but isn't correct in TS types
                reversed
            />
            <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style}
            />
        </RadialBarChart>
    );
  
}

export default UserRadialBarChart