import { createContext, useState, useContext, useEffect } from "react";
import { NewBudget } from "../models/models";
import { AuthContext } from "./authContext";

interface DataContextInterface {
    allTemplates: NewBudget[];
    saveTemplateInDataContext: (template: NewBudget) => void;
    allBudgets: NewBudget[];
    saveBudgetInDataContext: (budget: NewBudget) => void;
}

export const DataContext = createContext({} as DataContextInterface);

const DataContextProvider = ({ children }: any) => {
    const {
        user: {
            data: { templates, budgets },
        },
    } = useContext(AuthContext);

    const [allTemplates, setAllTemplates] = useState<NewBudget[]>(templates);
    const saveTemplateInDataContext = (template: NewBudget) => {
        setAllTemplates([template, ...allTemplates]);
    };

    const [allBudgets, setAllBudgets] = useState<NewBudget[]>(budgets);

    const saveBudgetInDataContext = (budget: NewBudget) => {
        // udate budget with new data if it exists or add new budget to list
        const budgetExists = allBudgets.filter((b) => {
            return b.id === budget.id;
        });
        if (budgetExists.length) {
            const ref = allBudgets;
            const updated = ref.filter((b) => {
                // uncheck active budget if new budget is set to active
                if (budget.isActive) {
                    b.isActive = false;
                }
                return b.id !== budget.id;
            });
            setAllBudgets([budget, ...updated]);
        } else {
            setAllBudgets([budget, ...allBudgets]);
        }
    };

    console.log(allBudgets, allTemplates);
    return (
        <DataContext.Provider value={{ allTemplates, saveTemplateInDataContext, allBudgets, saveBudgetInDataContext }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
