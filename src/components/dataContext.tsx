import { createContext, useState, useContext, useEffect } from "react";
import { NewBudget } from "../models/models";
import { AuthContext } from "./authContext";
import { NavigationContext } from "./navigationContext";
import axios from "axios";

interface DataContextInterface {
    allTemplates: NewBudget[];
    saveTemplateInDataContext: (template: NewBudget) => void;
    allBudgets: NewBudget[];
    saveBudgetInDataContext: (budget: NewBudget) => void;
    deleteBudgetData: (budgetId: string, isTemplate: boolean | null) => void;
    saveBudgetToActive: (budgetId: string) => void;
    updateBudgetWithData: (budget: NewBudget) => void;
}

export const DataContext = createContext({} as DataContextInterface);

const DataContextProvider = ({ children }: any) => {
    const { user } = useContext(AuthContext);
    const { seeLandingPage } = useContext(NavigationContext);

    // TEMPLATES
    const [allTemplates, setAllTemplates] = useState<NewBudget[]>([]);
    const saveTemplateInDataContext = (template: NewBudget) => {
        setAllTemplates([template, ...allTemplates]);
        // UPDATE DB WITH NEW TEMPLATE
        axios.post("http://localhost:3001/budget/add", { data: template });
    };

    // BUDGETS
    const [allBudgets, setAllBudgets] = useState<NewBudget[]>([]);
    const saveBudgetInDataContext = (budget: NewBudget) => {
        setAllBudgets([budget, ...allBudgets]);
        // UPDATE DB WITH NEW BUDGET
        axios.post("http://localhost:3001/budget/add", { data: budget });
    };

    const saveBudgetToActive = (budgetId: string) => {
        const updatedBudgets = allBudgets.map((budget) => {
            let newBudget = budget;
            if (budgetId === budget.id) {
                newBudget.isActive = true;
            } else {
                newBudget.isActive = false;
            }
            return newBudget;
        });
        setAllBudgets(updatedBudgets);
        axios.post("http://localhost:3001/budget/active", { budgetId: budgetId });
    };

    const updateBudgetWithData = async (budget: NewBudget) => {
        if (user && allBudgets) {
            const allBudgetRef = allBudgets;
            const removedUpdatable = allBudgetRef.filter((b) => {
                return b.id !== budget.id;
            });
            setAllBudgets([budget, ...removedUpdatable]);
            await axios.post("http://localhost:3001/budget/update", { data: budget });
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
        axios.post("http://localhost:3001/budget/delete", { id: budgetId });
    };

    useEffect(() => {
        if (allBudgets.length === 0 && allTemplates.length === 0) seeLandingPage();
    }, [allBudgets, allTemplates]);

    useEffect(() => {
        setAllTemplates(user.data.templates);
        setAllBudgets(user.data.budgets);
    }, [user]);

    return (
        <DataContext.Provider
            value={{
                allTemplates,
                saveTemplateInDataContext,
                allBudgets,
                saveBudgetInDataContext,
                deleteBudgetData,
                saveBudgetToActive,
                updateBudgetWithData,
            }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
