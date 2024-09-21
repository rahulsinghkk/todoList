import { useEffect, useState } from "react"

export const TodoDate = () => {
    const [currentTime, setCurrentTime] = useState("")

    useEffect(()=> {
        const interval = setInterval(()=>{
            const now = new Date()
            const formattedDate = now.toLocaleDateString()
            const formattedTime = now.toLocaleTimeString()

            setCurrentTime(`${formattedDate} - ${formattedTime}`)
        return () => clearInterval(interval)
        }, 1000)
    },[])

    return (
        <h2> {currentTime} </h2>
    )
}