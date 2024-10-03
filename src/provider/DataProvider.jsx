import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({
    user: {},
    activity: {},
    avgSessions: {},
    performance: {},
    setUserId: () => {},
})

const DataProvider = ({children}) => {
    const [userId, setUserId] = useState()
    const [user, setUser] = useState()
    const [activity, setActivity] = useState()
    const [avgSessions, setAvgSessions] = useState()
    const [performance, setPerformance] = useState()

    const getUser = async () => {
        const response = await fetch(`http://localhost:3000/user/${userId}`)
        if (response.status === 404) {
            window.location.href = '/error'
        }
        const data = await response.json()
        setUser(data.data)
    }
    const getActivity = async () => {
        const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
        if (response.status === 404) {
            window.location.href = '/error'
        }
        const data = await response.json()
        setActivity(data.data)
    }
    const getAvgSessions = async () => {
        const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
        if (response.status === 404) {
            window.location.href = '/error'
        }
        const data = await response.json()
        setAvgSessions(data.data)
    }
    const getPerformance = async () => {
        const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
        if (response.status === 404) {
            window.location.href = '/error'
        }
        const data = await response.json()
        setPerformance(data.data)
    }
        
        useEffect(() => {
            if (!userId) return
            getUser()
            getActivity()
            getAvgSessions()
            getPerformance()
        },[userId])

    return <DataContext.Provider value={{user, activity, avgSessions, performance, setUserId}}>{children}</DataContext.Provider>
}

export default DataProvider