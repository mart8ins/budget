import { createContext, useContext, useState } from "react";
import { BudgetTemplate, Expanses, CreateTemplateContextInterface } from "../models/models";
import { AuthContext } from "./authContext";
import { v4 as uuidv4 } from "uuid";
import { NavigationContext } from "./navigationContext";
import { DataContext } from "./dataContext";

export const CreateTemplateContext = createContext({} as CreateTemplateContextInterface);

const CreateTemplateContextprovider = ({ children }: any) => {
    const { user } = useContext(AuthContext);
    const { addNewTemplate } = useContext(DataContext);
    const { seeLandingPage } = useContext(NavigationContext);

    const addTemplateData = (template: BudgetTemplate) => {
        setTemplate(template);
    };

    // NEW TEMPLATE
    const [template, setTemplate] = useState<BudgetTemplate>({
        id: uuidv4(),
        userId: user.id,
        title: "",
        monthlyIncome: "",
        blocks: [],
    });

    // ADD NEW PAYMENT BLOCK FOR TEMPLATE
    const addBlocks = (blocks: Expanses[]) => {
        setTemplate({
            ...template,
            blocks: blocks,
        });
    };

    // DELETE PAYMENT BLOCK FROM TEMPLATE
    const deletePaymentBlock = (blockId: string) => {
        const filtered = template.blocks.filter((block) => {
            return block.id !== blockId;
        });
        addBlocks(filtered);
    };

    const saveTemplate = () => {
        console.log(template);
        addNewTemplate(template);
        setTemplate({
            id: uuidv4(),
            userId: user.id,
            title: "",
            monthlyIncome: "",
            blocks: [],
        });
        seeLandingPage();
    };

    return (
        <CreateTemplateContext.Provider value={{ template, addTemplateData, addBlocks, deletePaymentBlock, saveTemplate }}>
            {children}
        </CreateTemplateContext.Provider>
    );
};

export default CreateTemplateContextprovider;
