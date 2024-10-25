import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";
import useUserData from "../../hooks/useUserData";

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

  const data = [{ name: "Score", x: user.todayScore * 100, fill: "#f00" }];

  return (
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
        label={{ position: "center", fill: "#000" }}
        background
        dataKey="x"
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
  );
};

export default UserRadialBarChart;
