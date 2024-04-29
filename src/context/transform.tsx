import React, { ReactNode, createContext, useContext, useState, FC } from "react";
type Transform = { x: number; y: number};
export type TransformContextType = {
    transform: Transform
    setTransform: React.Dispatch<React.SetStateAction<{x: number; y: number}>>
    start: string;
    setStart: React.Dispatch<React.SetStateAction<string>>;
    scroll: string;
    setScroll: React.Dispatch<React.SetStateAction<string>>;
    knight: string;
    setKnight: React.Dispatch<React.SetStateAction<string>>;
    wizard: string;
    setWizard: React.Dispatch<React.SetStateAction<string>>;
    dragon: string;
    setDragon: React.Dispatch<React.SetStateAction<string>>;
    chest: string;
    setChest: React.Dispatch<React.SetStateAction<string>>;
    globe: string;
    setGlobe: React.Dispatch<React.SetStateAction<string>>;
}
export const TransformContext = createContext<TransformContextType | undefined>(undefined)

export const useTransform = (): TransformContextType  => {
    const context = useContext(TransformContext)
    if (!context) {
        throw new Error("useTransform must be used within a TransformProvider");
      }
    return context;
};

type TransformProviderProps = {
    children: ReactNode;
}

const TransformProvider: FC<TransformProviderProps> = ( { children } ) => {
    const [transform, setTransform] = useState<Transform>({ x: 20, y: 1155})
    const [start, setStart] = useState<string>("start-bubble talk-bubble tri-right left-in")
    const [scroll, setScroll] = useState<string>("hide")
    const [knight, setKnight] = useState<string>("hide")
    const [wizard, setWizard] = useState<string>("hide")
    const [dragon, setDragon] = useState<string>("hide")
    const [chest, setChest] = useState<string>("hide")
    const [globe, setGlobe] = useState<string>("hide")
    return (
        <TransformContext.Provider value={{transform, setTransform, start, setStart, scroll, setScroll, knight, setKnight, wizard, setWizard, dragon, setDragon, chest, setChest, globe, setGlobe}}>
            {children}
        </TransformContext.Provider>

    )
}

export default TransformProvider
