import { createContext, useState, useContext, useEffect } from "react";
import { NewBudget } from "../models/models";
import { AuthContext } from "./authContext";
import { NavigationContext } from "./navigationContext";

interface DataContextInterface {
    allTemplates: NewBudget[];
    saveTemplateInDataContext: (template: NewBudget) => void;
    allBudgets: NewBudget[];
    saveBudgetInDataContext: (budget: NewBudget) => void;
    deleteBudgetData: (budgetId: string, isTemplate: boolean | null) => void;
}

export const DataContext = createContext({} as DataContextInterface);

const DataContextProvider = ({ children }: any) => {
    const {
        user: {
            data: { templates, budgets },
        },
    } = useContext(AuthContext);
    const { seeLandingPage } = useContext(NavigationContext);

    const [allTemplates, setAllTemplates] = useState<NewBudget[]>(templates);
    const saveTemplateInDataContext = (template: NewBudget) => {
        setAllTemplates([template, ...allTemplates]);
    };

    const [allBudgets, setAllBudgets] = useState<NewBudget[]>(budgets);

    const saveBudgetInDataContext = (budget: NewBudget) => {
        console.log(budget, "!!!!!!");
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

    const deleteBudgetData = (budgetId: string, isTemplate: boolean | null) => {
        let filtered;
        if (isTemplate) {
            filtered = allTemplates.filter((data) => {
                return data.id !== budgetId;
            });
            setAllTemplates(filtered);
        } else {
            filtered = allBudgets.filter((data) => {
                return data.id !== budgetId;
            });
            setAllBudgets(filtered);
        }
    };

    useEffect(() => {
        if (allBudgets.length === 0 && allTemplates.length === 0) seeLandingPage();
    }, [allBudgets, allTemplates]);

    return (
        <DataContext.Provider value={{ allTemplates, saveTemplateInDataContext, allBudgets, saveBudgetInDataContext, deleteBudgetData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
