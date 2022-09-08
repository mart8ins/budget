import { createContext, useContext, useState, useEffect } from "react";
import { NewBudget, Expanses, CreateContextInterface } from "../models/models";
import { AuthContext } from "./authContext";
import { v4 as uuidv4 } from "uuid";
import { NavigationContext } from "./navigationContext";
import { DataContext } from "./dataContext";

export const CreateContext = createContext({} as CreateContextInterface);

const CreateContextprovider = ({ children }: any) => {
    const { user } = useContext(AuthContext);
    const { saveBudgetInDataContext, saveTemplateInDataContext } = useContext(DataContext);
    const { seeLandingPage } = useContext(NavigationContext);
    // NEW TEMPLATE

    const [budget, setBudget] = useState<NewBudget>({
        id: "",
        userId: "",
        title: "",
        monthlyIncome: "",
        expanses: [],
        template: null,
        isActive: false,
    });

    useEffect(() => {
        setBudget({
            id: uuidv4(),
            userId: user.id,
            title: "",
            monthlyIncome: "",
            expanses: [],
            template: null,
            isActive: false,
        });
    }, [user]);

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

    const saveTemplateOrBudget = () => {
        budget.template ? saveTemplateInDataContext(budget) : saveBudgetInDataContext(budget);
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
        <CreateContext.Provider value={{ budget, addBudgetData, addExpansesB, deletePaymentExpanseB, saveTemplateOrBudget }}>
            {children}
        </CreateContext.Provider>
    );
};

export default CreateContextprovider;
