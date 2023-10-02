import { createContext, useContext, useState } from "react";

export const TransformContext = createContext()
export const useTransform = () => useContext(TransformContext)

export default function TransformProvider( { children } ){
    const [transform, setTransform] = useState({ x: 20, y: 1180})
    const [start, setStart] = useState("talk-bubble tri-right left-in")

    return (
        <TransformContext.Provider value={{transform, setTransform, start, setStart}}>
            {children}
        </TransformContext.Provider>

    )
}
