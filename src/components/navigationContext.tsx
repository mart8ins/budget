import { createContext, useState } from "react";
import { NavigationInterface } from "../models/models";

export const NavigationContext = createContext({} as NavigationInterface);

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

    return (
        <NavigationContext.Provider value={{ navigateTo, createTemplate, seeTemplates, createBudget, seeBudgets, seeLandingPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export default NavigationContextProvider;
