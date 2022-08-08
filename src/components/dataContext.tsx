import React, { createContext, useState, useContext } from "react";
import { BudgetTemplate, Budget } from "../models/models";
import { AuthContext } from "./authContext";

interface DataContextInterface {
    allTemplates: BudgetTemplate[];
    addNewTemplate: (template: BudgetTemplate) => void;
    allBudgets: Budget[];
    addNewBudget: (template: Budget) => void;
}

export const DataContext = createContext({} as DataContextInterface);

const DataContextProvider = ({ children }: any) => {
    const {
        user: {
            data: { templates, budgets },
        },
    } = useContext(AuthContext);

    const [allTemplates, setAllTemplates] = useState<BudgetTemplate[]>(templates);
    const addNewTemplate = (template: BudgetTemplate) => {
        setAllTemplates([template, ...allTemplates]);
    };

    const [allBudgets, setAllBudgets] = useState<Budget[]>(budgets);
    const addNewBudget = (budget: Budget) => {
        setAllBudgets([budget, ...allBudgets]);
    };
    console.log(allTemplates, "all templates");

    return <DataContext.Provider value={{ allTemplates, addNewTemplate, allBudgets, addNewBudget }}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
