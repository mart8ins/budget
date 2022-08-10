import { useContext } from "react";
import { CreateContext } from "../../../createContext";
import { DataContext } from "../../../dataContext";
import { NavigationContext } from "../../../navigationContext";
import "./navigationHeader.css";
type Props = {};

function NavigationHeader({}: Props) {
    const { allTemplates, allBudgets } = useContext(DataContext);
    const { budget, addBudgetData } = useContext(CreateContext);
    const { navigateTo, createTemplate, seeTemplates, createBudget, seeBudgets } = useContext(NavigationContext);

    return (
        <div className="create__options__header">
            <div className="create__option">
                <div
                    className={`create__data ${navigateTo === "createTemplate" ? " activeUI" : null}`}
                    onClick={() => {
                        createTemplate();
                        addBudgetData({
                            ...budget,
                            template: true,
                        });
                    }}>
                    Create template
                </div>
                {allTemplates.length > 0 && (
                    <div className={`see__data ${navigateTo === "seeTemplates" ? " activeUI" : null}`} onClick={seeTemplates}>
                        {allTemplates.length}
                    </div>
                )}
            </div>
            <div className="create__option">
                <div
                    className={`create__data ${navigateTo === "createBudget" ? " activeUI" : null}`}
                    onClick={() => {
                        createBudget();
                        addBudgetData({
                            ...budget,
                            template: false,
                        });
                    }}>
                    Create budget
                </div>
                {allBudgets.length > 0 && (
                    <div className={`see__data ${navigateTo === "seeBudgets" ? " activeUI" : null}`} onClick={seeBudgets}>
                        {allBudgets.length}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavigationHeader;
