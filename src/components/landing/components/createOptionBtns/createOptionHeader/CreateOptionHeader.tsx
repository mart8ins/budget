import { createTemplate, seeTemplates, createBudget, seeBudgets } from "../../../../navigationContext";
import "./createOptionHeader.css";
type Props = {};

function CreateOptionHeader({}: Props) {
    return (
        <div className="create__options__header">
            <div className="create__option">
                <div className="create__data" onClick={createTemplate}>
                    Create template
                </div>
                <div className="see__data" onClick={seeTemplates}>
                    5
                </div>
            </div>
            <div className="create__option">
                <div className="create__data" onClick={createBudget}>
                    Create budget
                </div>
                <div className="see__data" onClick={seeBudgets}>
                    1
                </div>
            </div>
        </div>
    );
}

export default CreateOptionHeader;
