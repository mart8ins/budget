import { useContext } from "react";
import { NavigationContext } from "../../../../navigationContext";
import BlockPreview from "../shared/blockPreview/BlockPreview";
import CreateBlock from "../shared/createBlock/CreateBlock";
import TitleInputs from "../shared/titleInputs/TitleInputs";
import SaveBudgetTemplateBtn from "../shared/saveBudgetTemplateBtn/SaveBudgetTemplateBtn";
import "./createBudget.css";
import { CreateBudgetContext } from "../../../../createBudgetContext";
type Props = {};

function CreateBudget({}: Props) {
    const { budget } = useContext(CreateBudgetContext);
    const { navigateTo, createTemplate, seeTemplates, createBudget, seeBudgets } = useContext(NavigationContext);

    return (
        <div className="template__container">
            {budget.expanses.length > 0 && budget.title && budget.monthlyIncome && <SaveBudgetTemplateBtn saveType={"budget"} />}
            <TitleInputs inputFor="budget" />
            <BlockPreview previewFor="budget" />
            {budget.title && budget.monthlyIncome && <CreateBlock blockFor="budget" />}
        </div>
    );
}

export default CreateBudget;
