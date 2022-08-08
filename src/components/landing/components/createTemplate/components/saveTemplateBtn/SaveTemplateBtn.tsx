import { useContext } from "react";
import { CreateTemplateContext } from "../../../../../createTemplateContext";
import "./saveTemplateBtn.css";

function SaveTemplateBtn() {
    const { saveTemplate } = useContext(CreateTemplateContext);
    return (
        <button className="save__template__btn" onClick={saveTemplate}>
            Save template
        </button>
    );
}

export default SaveTemplateBtn;
