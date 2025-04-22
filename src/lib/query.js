import activityMockData from "../mock/activity.json";
import userMockData from "../mock/user.json";
import averageMockData from "../mock/average-sessions.json";
import performanceMockData from "../mock/performance.json";

//ici les fonctions permettant de fetch les data, à appeler par le provider

export const getActivityResponse = async (isMockData, userId) => {
  if (isMockData) {
    return activityMockData.data;
  }

  const activityResponse = await fetch(
    `http://localhost:3000/user/${userId}/activity`
  );
  if (activityResponse.status === 404) {
    window.location.href = "/error";
  }
  const activityData = await activityResponse.json();
  return activityData.data;
};

export const getAvgSessionsResponse = async (isMockData, userId) => {
  if (isMockData) {
    return averageMockData.data;
  }

  const sessionResponse = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );
  if (sessionResponse.status === 404) {
    window.location.href = "/error";
  }
  const sessionData = await sessionResponse.json();
  return sessionData.data;
};

export const getPerformanceResponse = async (isMockData, userId) => {
  if (isMockData) {
    return performanceMockData.data;
  }

  const performanceResponse = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  );
  if (performanceResponse.status === 404) {
    window.location.href = "/error";
  }
  const performanceData = await performanceResponse.json();
  return performanceData.data;
};

export const getUserResponse = async (isMockData, userId) => {
  if (isMockData) {
    return userMockData.data;
  }
  const userResponse = await fetch(`http://localhost:3000/user/${userId}`);
  if (userResponse.status === 404) {
    window.location.href = "/error";
  }
  const userData = await userResponse.json();
  return userData.data;
};
