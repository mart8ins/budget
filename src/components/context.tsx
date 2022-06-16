import { createContext, useState } from "react";

type Budget = {
    month: string;
    monthlyIncome: string;
};

interface BudgetContext {
    budget: Budget;
    updateIncome: (income: string) => void;
}
export const BudgetContext = createContext({} as BudgetContext);

const BudgetContextprovider = ({ children }: any) => {
    const [budget, setBudget] = useState<Budget>({ month: "June", monthlyIncome: "" });

    const updateIncome = (income: string) => {
        setBudget({ ...budget, monthlyIncome: income });
    };

    return <BudgetContext.Provider value={{ budget, updateIncome }}>{children}</BudgetContext.Provider>;
};

export default BudgetContextprovider;
