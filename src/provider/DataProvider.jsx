import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({
    user: {},
    activity: {},
    avgSessions: {},
    performance: {}
})

const DataProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [activity, setActivity] = useState({})
    const [avgSessions, setAvgSessions] = useState({})
    const [performance, setPerformance] = useState({})
    const id = 12
    const getUser = async () => {
        const response = await fetch(`http://localhost:3000/user/${id}`)
        const data = await response.json()
        setUser(data.data)
    }
    const getActivity = async () => {
        const response = await fetch(`http://localhost:3000/user/${id}/activity`)
        const data = await response.json()
        setActivity(data.data)
    }
    const getAvgSessions = async () => {
        const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
        const data = await response.json()
        setAvgSessions(data.data)
    }
    const getPerformance = async () => {
        const response = await fetch(`http://localhost:3000/user/${id}/performance`)
        const data = await response.json()
        setPerformance(data.data)
    }
    useEffect(() => {
        getUser(id)
        getActivity(id)
        getAvgSessions(id)
        getPerformance(id)
    },[id])
    return <DataContext.Provider value={{user, activity, avgSessions, performance}}>{children}</DataContext.Provider>
}

export default DataProvider