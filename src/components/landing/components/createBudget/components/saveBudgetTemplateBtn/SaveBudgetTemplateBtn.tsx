import { useContext } from "react";
import { CreateContext } from "../../../../../createContext";
import "./saveBudgetTemplateBtn.css";

function SaveBudgetTemplateBtn() {
    const { saveTemplateOrBudget, budget } = useContext(CreateContext);
    return (
        <button className="save__create__btn" onClick={saveTemplateOrBudget}>
            {budget.template ? "Save template" : "Save budget"}
        </button>
    );
}

export default SaveBudgetTemplateBtn;
