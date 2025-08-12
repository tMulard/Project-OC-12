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
    setUser(userData);
  }

  const getActivity = async () => {
    const activityData = await getActivityResponse(isMockData, userId);
    setActivity(activityData);
  }

  const getAvgSessions = async () => {
    const averageData = await getAvgSessionsResponse(isMockData, userId);
    setAvgSessions(averageData);
  }

  const getPerformance = async () => {
    const performanceData = await getPerformanceResponse(isMockData, userId);
    setPerformance(performanceData);
  }

  // useEffect(() => {
  //   if (process.env.NODE_ENV === "production") {
  //     // on est sûr qu'en prod on ait les données de l'API
  //     setIsMockData(true);
  //   }
  // }, []);

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
