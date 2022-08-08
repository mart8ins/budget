import { useContext } from "react";
// import { AuthContext } from "../../../authContext";
import { DataContext } from "../../../dataContext";
import { NavigationContext } from "../../../navigationContext";
import "./navigationHeader.css";
type Props = {};

function NavigationHeader({}: Props) {
    // const {
    //     user: {
    //         data: { templates, budgets },
    //     },
    // } = useContext(AuthContext);
    const { allTemplates, allBudgets } = useContext(DataContext);
    const { navigateTo, createTemplate, seeTemplates, createBudget, seeBudgets } = useContext(NavigationContext);

    return (
        <div className="create__options__header">
            <div className="create__option">
                <div className={`create__data ${navigateTo === "createTemplate" ? " activeUI" : null}`} onClick={createTemplate}>
                    Create template
                </div>
                {allTemplates.length > 0 && (
                    <div className={`see__data ${navigateTo === "seeTemplates" ? " activeUI" : null}`} onClick={seeTemplates}>
                        {allTemplates.length}
                    </div>
                )}
            </div>
            <div className="create__option">
                <div className={`create__data ${navigateTo === "createBudget" ? " activeUI" : null}`} onClick={createBudget}>
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
