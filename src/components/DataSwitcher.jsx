import useUserData from "../hooks/useUserData";
//fichier correspondant au switch mock/API
export const DataSwitcher = () => {
  const { isMockData, setIsMockData } = useUserData();

  if (process.env.NODE_ENV === "production") return null; // impossible de switch en PROD

  const handleClick = () => {
    setIsMockData(!isMockData);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        top: "100px",
        right: "10px",
      }}
    >
      data from: {isMockData ? "mock" : "api"}
    </button>
  );
};
