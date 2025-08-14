import { createContext, useEffect, useState } from "react";
import { getActivityResponse, getAvgSessionsResponse, getPerformanceResponse, getUserResponse } from "../lib/query";

//fichier de service pour le site
export const DataContext = createContext({
  user: {},
  activity: {},
  avgSessions: {},
  performance: {},
  setUserId: () => {},
  setIsMockData: () => {},
  isMockData: Boolean,
});

const DataProvider = ({ children }) => {
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [avgSessions, setAvgSessions] = useState();
  const [performance, setPerformance] = useState();
  const [isMockData, setIsMockData] = useState(true);
//fonctions appelant les sections de données correspondant à l'id transmis, les résultats diffèrent selon si l'on est en prod ou dev
  const getUser = async () => {
    const userData = await getUserResponse(isMockData, userId);
    console.log(userData)
    if (userData) setUser(userData);
    else console.log("Error, no user data found")
  }

  const getActivity = async () => {
    const activityData = await getActivityResponse(isMockData, userId);
    if (activityData) setActivity(activityData);
    else console.log("Error, no activity data found")
  }

  const getAvgSessions = async () => {
    const averageData = await getAvgSessionsResponse(isMockData, userId);
    if (averageData) setAvgSessions(averageData);
    else console.log("Error, no session data found")
  }

  const getPerformance = async () => {
    const performanceData = await getPerformanceResponse(isMockData, userId);
    if (performanceData) setPerformance(performanceData);
    else console.log("Error, no performance data found")
  }

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // on est sûr qu'en prod on ait les données de l'API
      setIsMockData(true);
    }
  }, []);

  useEffect(() => {
      if (!userId) return;
      getUser();
      getActivity();
      getAvgSessions();
      getPerformance();
  }, [userId, isMockData]);

  return (
    <DataContext.Provider
      value={{
        user,
        activity,
        avgSessions,
        performance,
        setUserId,
        setIsMockData,
        isMockData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
