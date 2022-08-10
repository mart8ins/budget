import { useContext } from "react";
import { CreateTemplateContext } from "../../../../createTemplateContext";
import "./createTemplate.css";
import SaveBudgetTemplateBtn from "../shared/saveBudgetTemplateBtn/SaveBudgetTemplateBtn";
import BlockPreview from "../shared/blockPreview/BlockPreview";
import TitleInputs from "../shared/titleInputs/TitleInputs";
import CreateBlock from "../shared/createBlock/CreateBlock";

function CreateTemplate() {
    const { template } = useContext(CreateTemplateContext);

    return (
        <div className="template__container">
            {template.expanses.length > 0 && template.title && template.monthlyIncome && <SaveBudgetTemplateBtn saveType={"template"} />}
            <TitleInputs inputFor="template" />
            <BlockPreview previewFor="template" />
            {template.title && template.monthlyIncome && <CreateBlock blockFor="template" />}
        </div>
    );
}

export default CreateTemplate;
