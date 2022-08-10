import { useContext } from "react";
import { CreateBudgetContext } from "../../../../../createBudgetContext";
import { CreateTemplateContext } from "../../../../../createTemplateContext";
import "./saveBudgetTemplateBtn.css";

type Props = {
    saveType: string;
};

function SaveBudgetTemplateBtn({ saveType }: Props) {
    const { saveTemplate } = useContext(CreateTemplateContext);
    const { saveBudget } = useContext(CreateBudgetContext);
    return (
        <>
            {saveType === "template" && (
                <button className="save__create__btn" onClick={saveTemplate}>
                    Save template
                </button>
            )}
            {saveType === "budget" && (
                <button className="save__create__btn" onClick={saveBudget}>
                    Save budget
                </button>
            )}
        </>
    );
}

export default SaveBudgetTemplateBtn;
