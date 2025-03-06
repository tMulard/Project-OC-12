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
          barGap={7}
          barCategoryGap={0}
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
          <Bar dataKey="kilogram" name={"Poids (kg)"} fill="black" barSize={7} radius={[20, 20, 0, 0]} />
          <Bar dataKey="calories" name={"Calories brûlées (kCal)"} fill="red" barSize={7} radius={[20, 20, 0, 0]} />
        </BarChart>
    );
  
}

export default UserBarChart