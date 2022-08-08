import { useContext } from "react";
import { CreateTemplateContext } from "../../../createTemplateContext";
import "./createTemplate.css";
import SaveTemplateBtn from "./components/saveTemplateBtn/SaveTemplateBtn";
import BlockPreview from "./components/blockPreview/BlockPreview";
import TitleInputs from "./components/titleInputs/TitleInputs";
import CreateBlock from "./components/createBlock/CreateBlock";

function CreateTemplate() {
    const { template } = useContext(CreateTemplateContext);

    return (
        <div className="template__container">
            {template.blocks.length > 0 && template.title && template.monthlyIncome && <SaveTemplateBtn />}
            <TitleInputs />
            <BlockPreview />
            {template.title && template.monthlyIncome && <CreateBlock />}
        </div>
    );
}

export default CreateTemplate;
