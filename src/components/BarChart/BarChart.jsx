import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import useUserData from '../../hooks/useUserData';

const UserBarChart = () => {
    //   Provider to get whatever data needed
    const {activity} = useUserData()

    return (
        <BarChart
          width={900}
          height={260}
          data={activity.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="black" />
          <Bar dataKey="calories" fill="red" />
        </BarChart>
    );
  
}

export default UserBarChart