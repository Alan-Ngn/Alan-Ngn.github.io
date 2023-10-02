import { createContext, useContext, useState } from "react";

export const TransformContext = createContext()
export const useTransform = () => useContext(TransformContext)

export default function TransformProvider( { children } ){
    const [transform, setTransform] = useState({ x: 20, y: 10})


    return (
        <TransformContext.Provider value={{transform, setTransform}}>
            {children}
        </TransformContext.Provider>

    )
}
