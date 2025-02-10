import { useState, createContext, useContext } from "react";

type ActiveTabProviderPropsType = {
    children: React.ReactElement;
}

type TabContextType = {
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}


const TabContext = createContext<TabContextType>({
    activeTab: 0,
    setActiveTab: () => undefined,
});

export function ActiveTabProvider({ children }: ActiveTabProviderPropsType) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }} >
            {children}
        </TabContext.Provider>
    )
}

export function useTabContext() {
    const context = useContext(TabContext);

    if (!context) {
        console.log("error");
        throw new Error("Failed to use Tab Context");
    }

    return context;
}