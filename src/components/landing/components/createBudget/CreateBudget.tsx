import { useContext } from "react";
import BlockPreview from "./components/blockPreview/BlockPreview";
import CreateBlock from "./components/createBlock/CreateBlock";
import TitleInputs from "./components/titleInputs/TitleInputs";
import SaveBudgetTemplateBtn from "./components/saveBudgetTemplateBtn/SaveBudgetTemplateBtn";
import "./createBudget.css";
import { CreateContext } from "../../../createContext";

function CreateBudget() {
    const { budget } = useContext(CreateContext);

    return (
        <div className="template__container">
            {budget.expanses.length > 0 && budget.title && budget.monthlyIncome && <SaveBudgetTemplateBtn />}
            <TitleInputs />
            <BlockPreview />
            {budget.title && budget.monthlyIncome && <CreateBlock />}
        </div>
    );
}

export default CreateBudget;
