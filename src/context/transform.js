import { createContext, useContext, useState } from "react";

export const TransformContext = createContext()
export const useTransform = () => useContext(TransformContext)

export default function TransformProvider( { children } ){
    const [transform, setTransform] = useState({ x: 20, y: 1180})
    const [start, setStart] = useState("start-bubble talk-bubble tri-right left-in")
    const [scroll, setScroll] = useState("hide")
    const [knight, setKnight] = useState("hide")
    const [wizard, setWizard] = useState("hide")
    const [dragon, setDragon] = useState("hide")
    const [chest, setChest] = useState("hide")
    return (
        <TransformContext.Provider value={{transform, setTransform, start, setStart, scroll, setScroll, knight, setKnight, wizard, setWizard, dragon, setDragon, chest, setChest}}>
            {children}
        </TransformContext.Provider>

    )
}
