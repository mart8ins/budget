import { createContext, useContext, useState } from "react";
import { NewBudget, Expanses, CreateBudgetContextInterface } from "../models/models";
import { AuthContext } from "./authContext";
import { v4 as uuidv4 } from "uuid";
import { NavigationContext } from "./navigationContext";
import { DataContext } from "./dataContext";

export const CreateBudgetContext = createContext({} as CreateBudgetContextInterface);

const CreateBudgetContextprovider = ({ children }: any) => {
    const { user } = useContext(AuthContext);
    const { addNewBudget } = useContext(DataContext);
    const { seeLandingPage } = useContext(NavigationContext);

    const addBudgetData = (budget: NewBudget) => {
        setBudget(budget);
    };

    // NEW TEMPLATE
    const [budget, setBudget] = useState<NewBudget>({
        id: uuidv4(),
        userId: user.id,
        title: "",
        monthlyIncome: "",
        expanses: [],
    });

    // ADD NEW PAYMENT BLOCK FOR TEMPLATE
    const addExpansesB = (expanses: Expanses[]) => {
        setBudget({
            ...budget,
            expanses: expanses,
        });
    };

    // DELETE PAYMENT BLOCK FROM TEMPLATE
    const deletePaymentExpanseB = (expanseId: string) => {
        const filtered = budget.expanses.filter((expanse) => {
            return expanse.id !== expanseId;
        });
        addExpansesB(filtered);
    };

    const saveBudget = () => {
        addNewBudget(budget);
        setBudget({
            id: uuidv4(),
            userId: user.id,
            title: "",
            monthlyIncome: "",
            expanses: [],
        });
        seeLandingPage();
    };

    return (
        <CreateBudgetContext.Provider value={{ budget, addBudgetData, addExpansesB, deletePaymentExpanseB, saveBudget }}>
            {children}
        </CreateBudgetContext.Provider>
    );
};

export default CreateBudgetContextprovider;
