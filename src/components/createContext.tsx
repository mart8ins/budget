import { createContext, useContext, useState } from "react";
import { NewBudget, Expanses, CreateContextInterface } from "../models/models";
import { AuthContext } from "./authContext";
import { v4 as uuidv4 } from "uuid";
import { NavigationContext } from "./navigationContext";
import { DataContext } from "./dataContext";

export const CreateContext = createContext({} as CreateContextInterface);

const CreateContextprovider = ({ children }: any) => {
    const { user } = useContext(AuthContext);
    const { saveBudget, addNewTemplate } = useContext(DataContext);
    const { seeLandingPage } = useContext(NavigationContext);

    // NEW TEMPLATE
    const [budget, setBudget] = useState<NewBudget>({
        id: uuidv4(),
        userId: user.id,
        title: "",
        monthlyIncome: "",
        expanses: [],
        template: null,
        isActive: false,
    });

    const addBudgetData = (budget: NewBudget) => {
        setBudget(budget);
    };

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

    const addBudget = () => {
        budget.template ? addNewTemplate(budget) : saveBudget(budget);
        setBudget({
            id: uuidv4(),
            userId: user.id,
            title: "",
            monthlyIncome: "",
            expanses: [],
            template: null,
            isActive: false,
        });
        seeLandingPage();
    };

    return (
        <CreateContext.Provider value={{ budget, addBudgetData, addExpansesB, deletePaymentExpanseB, addBudget }}>
            {children}
        </CreateContext.Provider>
    );
};

export default CreateContextprovider;
