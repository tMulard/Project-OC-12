import { createContext, useEffect, useState } from "react";
import userMockData from "../mock/user.json";
import activityMockData from "../mock/activity.json";
import averageMockData from "../mock/average-sessions.json";
import performanceMockData from "../mock/performance.json";

export const DataContext = createContext({
  user: {},
  activity: {},
  avgSessions: {},
  performance: {},
  setUserId: () => {},
});

const DataProvider = ({ children }) => {
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [avgSessions, setAvgSessions] = useState();
  const [performance, setPerformance] = useState();

  const env = process.env.NODE_ENV; // permet de savoir si on est en dev ou en prod
  // const env = "production";

  if (env === "development") {
    console.log({env});
  }

  const getUser = async () => {
    if (env === "development") {
      const data = userMockData.data;
      setUser(data);
    } else {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      if (response.status === 404) {
        window.location.href = "/error";
      }
      const data = await response.json();
      setUser(data.data);
    }
  };
  const getActivity = async () => {
    if (env === "development") {
      const data = activityMockData.data;
      setActivity(data);
    } else {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/activity`
      );
      if (response.status === 404) {
        window.location.href = "/error";
      }
      const data = await response.json();
      setActivity(data.data);
    }
  };
  const getAvgSessions = async () => {
    if (env === "development") {
      const data = averageMockData.data;
      setAvgSessions(data);
    } else {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/average-sessions`
      );
      if (response.status === 404) {
        window.location.href = "/error";
      }
      const data = await response.json();
      setAvgSessions(data.data);
    }
  };
  const getPerformance = async () => {
    if (env === "development") {
      const data = performanceMockData.data;
      setPerformance(data);
    } else {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/performance`
      );
      if (response.status === 404) {
        window.location.href = "/error";
      }
      const data = await response.json();
      setPerformance(data.data);
    }
  };

  useEffect(() => {
    if (!userId) return;
    getUser();
    getActivity();
    getAvgSessions();
    getPerformance();
  }, [userId]);

  return (
    <DataContext.Provider
      value={{ user, activity, avgSessions, performance, setUserId }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
