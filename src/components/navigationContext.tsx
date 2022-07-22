import { createContext, useState } from "react";

interface Navigation {
    navigateTo: string;
    createTemplate: () => void;
    seeTemplates: () => void;
    createBudget: () => void;
    seeBudgets: () => void;
    seeLandingPage: () => void;
}

export const NavigationContext = createContext({} as Navigation);

const NavigationContextProvider = ({ children }: any) => {
    const [navigateTo, setNavigateTo] = useState("");

    const createTemplate = () => {
        setNavigateTo("createTemplate");
    };
    const createBudget = () => {
        setNavigateTo("createBudget");
    };
    const seeTemplates = () => {
        setNavigateTo("seeTemplates");
    };
    const seeBudgets = () => {
        setNavigateTo("seeBudgets");
    };

    const seeLandingPage = () => {
        setNavigateTo("");
    };

    console.log(navigateTo);

    return (
        <NavigationContext.Provider value={{ navigateTo, createTemplate, seeTemplates, createBudget, seeBudgets, seeLandingPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationContextProvider;
