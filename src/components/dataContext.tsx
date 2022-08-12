import React, { createContext, useState, useContext } from "react";
import { NewBudget } from "../models/models";
import { AuthContext } from "./authContext";

interface DataContextInterface {
    allTemplates: NewBudget[];
    addNewTemplate: (template: NewBudget) => void;
    allBudgets: NewBudget[];
    addNewBudget: (budget: NewBudget) => void;
}

export const DataContext = createContext({} as DataContextInterface);

const DataContextProvider = ({ children }: any) => {
    const {
        user: {
            data: { templates, budgets },
        },
    } = useContext(AuthContext);

    const [allTemplates, setAllTemplates] = useState<NewBudget[]>(templates);
    const addNewTemplate = (template: NewBudget) => {
        setAllTemplates([template, ...allTemplates]);
    };

    const [allBudgets, setAllBudgets] = useState<NewBudget[]>(budgets);
    const addNewBudget = (budget: NewBudget) => {
        setAllBudgets([budget, ...allBudgets]);
    };

    return <DataContext.Provider value={{ allTemplates, addNewTemplate, allBudgets, addNewBudget }}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
