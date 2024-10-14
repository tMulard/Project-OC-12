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

const UserLineChart = () => {
//   Provider to get whatever data needed
    const {avgSessions} = useUserData()

    return (
      <LineChart width={258} height={260} data={avgSessions.sessions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" padding={{ left: 30, right: 30 }} />
        <YAxis dataKey="sessionLength" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
}

export default UserLineChart