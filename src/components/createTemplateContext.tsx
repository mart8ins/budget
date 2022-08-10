import { createContext, useContext, useState } from "react";
import { NewBudget, Expanses, CreateTemplateContextInterface } from "../models/models";
import { AuthContext } from "./authContext";
import { v4 as uuidv4 } from "uuid";
import { NavigationContext } from "./navigationContext";
import { DataContext } from "./dataContext";

export const CreateTemplateContext = createContext({} as CreateTemplateContextInterface);

const CreateTemplateContextprovider = ({ children }: any) => {
    const { user } = useContext(AuthContext);
    const { addNewTemplate } = useContext(DataContext);
    const { seeLandingPage } = useContext(NavigationContext);

    const addTemplateData = (template: NewBudget) => {
        setTemplate(template);
    };

    // NEW BUDGET
    const [template, setTemplate] = useState<NewBudget>({
        id: uuidv4(),
        userId: user.id,
        title: "",
        monthlyIncome: "",
        expanses: [],
    });

    // ADD NEW PAYMENT BLOCK FOR TEMPLATE
    const addExpanses = (expanses: Expanses[]) => {
        setTemplate({
            ...template,
            expanses: expanses,
        });
    };

    // DELETE PAYMENT BLOCK FROM TEMPLATE
    const deletePaymentExpanse = (expanseId: string) => {
        const filtered = template.expanses.filter((expanse) => {
            return expanse.id !== expanseId;
        });
        addExpanses(filtered);
    };

    const saveTemplate = () => {
        addNewTemplate(template);
        setTemplate({
            id: uuidv4(),
            userId: user.id,
            title: "",
            monthlyIncome: "",
            expanses: [],
        });
        seeLandingPage();
    };

    return (
        <CreateTemplateContext.Provider value={{ template, addTemplateData, addExpanses, deletePaymentExpanse, saveTemplate }}>
            {children}
        </CreateTemplateContext.Provider>
    );
};

export default CreateTemplateContextprovider;
