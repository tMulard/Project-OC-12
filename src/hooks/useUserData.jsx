import { useContext } from "react"
import { DataContext } from "../provider/DataProvider.jsx"

const useUserData = () => {
    const context = useContext(DataContext)

    if (!context) {
        throw new Error("useUserData must be used within DataProvider")
    }

    return context
}

export default useUserData;