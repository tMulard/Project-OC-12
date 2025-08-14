import activityMockData from "../mock/activity.json";
import userMockData from "../mock/user.json";
import averageMockData from "../mock/average-sessions.json";
import performanceMockData from "../mock/performance.json";

//ici les fonctions permettant de fetch les data, à appeler par le provider

export const getActivityResponse = async (isMockData, userId) => {
  try {
    const activityResponse = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    );
    const activityData = await activityResponse.json();
    return activityData.data;
  } catch {
    const activityData = await activityMockData;
    return activityData.data;
  } finally {
    return null;
  }
};

export const getAvgSessionsResponse = async (isMockData, userId) => {
  try {
    const sessionResponse = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    const sessionData = await sessionResponse.json();
    return sessionData.data;
  } catch {
    const sessionData = await averageMockData;
    return sessionData.data;
  } finally {
    return null;
  }
};

export const getPerformanceResponse = async (isMockData, userId) => {
  try {
    const performanceResponse = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    );
    const performanceData = await performanceResponse.json();
    return performanceData.data;
  } catch {
    const performanceData = await performanceMockData;
    return performanceData.data;
  } finally {
    return null;
  }
};

export const getUserResponse = async (isMockData, userId) => {
  try {
    const userResponse = await fetch(`http://localhost:3000/user/${userId}`);
    const userData = await userResponse.json();
    console.log(userData)
    return userData.data;
  } catch {
    const userData = await userMockData;
    return userData.data;
  } finally {
    return null;
  }
};

/*
ancienne forme de la fonction :
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
*/