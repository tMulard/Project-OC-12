import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";
import useUserData from "../../hooks/useUserData";
import "./RadialBarChart.css";

const style = {
  top: 0,
  left: 50,
  lineHeight: "24px",
  fontWeight: "bold",
  fontSize: "20px",
  color: "#000",
};

const UserRadialBarChart = () => {
  //   Provider to get whatever data needed
  const { user } = useUserData();
  const userScore = user.todayScore * 100;
  const data = [{ name: "Score", x: userScore, fill: "#f00" }];

  return (
    <div className="radialBarChartContainer">
      <RadialBarChart
        width={258}
        height={260}
        cx={130}
        cy={130}
        barSize={10}
        innerRadius={80}
        outerRadius={140}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar
          label={{ display: "none" }}
          background
          dataKey="x"
          cornerRadius={5}
        />
        <PolarAngleAxis tick={false} domain={[0, 100]} type="number" />
        <Legend
          iconSize={0}
          width={120}
          height={14}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
      <div className="label">
        <p className="score">{data[0].x} %</p>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default UserRadialBarChart;
