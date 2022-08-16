import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BlockPreview from "./components/blockPreview/BlockPreview";
import CreateBlock from "./components/createBlock/CreateBlock";
import TitleInputs from "./components/titleInputs/TitleInputs";
import SaveBudgetTemplateBtn from "./components/saveBudgetTemplateBtn/SaveBudgetTemplateBtn";
import "./createBudget.css";
import { CreateContext } from "../../../createContext";
import { NavigationContext } from "../../../navigationContext";
import { NewBudget } from "../../../../models/models";
import { DataContext } from "../../../dataContext";
import { AuthContext } from "../../../authContext";

function CreateBudget() {
    const { user } = useContext(AuthContext);
    const { budget, addBudgetData } = useContext(CreateContext);
    const { navigateTo } = useContext(NavigationContext);
    const { allTemplates } = useContext(DataContext);

    const [useTemplate, setUsetemplate] = useState<boolean | undefined>(undefined);
    const [hideChooseOption, setHideChooseOption] = useState(false);

    const [selectedTemplate, setSelectedTemplate] = useState<NewBudget>();

    const templateSelectHandler = (e: React.FormEvent) => {
        const selectElement = e.target as HTMLSelectElement;
        const selectedOptionAtIndex = selectElement.childNodes[selectElement.selectedIndex] as HTMLOptionElement;
        const optionId = selectedOptionAtIndex.id;
        const findTemplate = allTemplates.filter((template) => {
            return template.id === optionId;
        });
        setSelectedTemplate({
            ...findTemplate[0],
            template: false,
            id: uuidv4(),
            title: "",
        });
    };

    useEffect(() => {
        selectedTemplate && addBudgetData(selectedTemplate);
    }, [selectedTemplate]);

    useEffect(() => {
        if (allTemplates.length === 0) {
            setUsetemplate(false);
            setHideChooseOption(true);
        }
    }, [allTemplates]);

    return (
        <div className="create__container">
            {!hideChooseOption && !useTemplate && navigateTo === "createBudget" && (
                <div className="choose__option__container">
                    <h2>Use template?</h2>
                    <button
                        onClick={() => {
                            setUsetemplate(true);
                            setHideChooseOption(true);
                        }}>
                        Yes
                    </button>
                    <button
                        onClick={() => {
                            setUsetemplate(false);
                            addBudgetData({
                                id: uuidv4(),
                                userId: user.id,
                                title: "",
                                monthlyIncome: "",
                                expanses: [],
                                template: null,
                                isActive: false,
                            });
                            setHideChooseOption(true);
                        }}>
                        No
                    </button>
                </div>
            )}

            {useTemplate && (
                <div className="select__template__container">
                    <select onChange={templateSelectHandler} defaultValue={"Choose template"}>
                        <option disabled value="Choose template">
                            Choose template
                        </option>
                        {allTemplates.map((temp) => {
                            return (
                                <option id={temp.id} key={temp.id}>
                                    {temp.title}
                                </option>
                            );
                        })}
                    </select>
                </div>
            )}

            {selectedTemplate && (
                <>
                    {budget.expanses.length > 0 && budget.title && budget.monthlyIncome && <SaveBudgetTemplateBtn />}
                    <TitleInputs />
                    <BlockPreview />
                    {budget.title && budget.monthlyIncome && <CreateBlock />}
                </>
            )}

            {navigateTo === "createBudget" && !useTemplate && useTemplate !== undefined && (
                <>
                    {budget.expanses.length > 0 && budget.title && budget.monthlyIncome && <SaveBudgetTemplateBtn />}
                    <TitleInputs />
                    <BlockPreview />
                    {budget.title && budget.monthlyIncome && <CreateBlock />}
                </>
            )}

            {navigateTo === "createTemplate" && (
                <>
                    {budget.expanses.length > 0 && budget.title && budget.monthlyIncome && <SaveBudgetTemplateBtn />}
                    <TitleInputs />
                    <BlockPreview />
                    {budget.title && budget.monthlyIncome && <CreateBlock />}
                </>
            )}
        </div>
    );
}

export default CreateBudget;
