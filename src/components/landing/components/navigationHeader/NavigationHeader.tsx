import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../../authContext";
import { CreateContext } from "../../../createContext";
import { DataContext } from "../../../dataContext";
import { NavigationContext } from "../../../navigationContext";
import "./navigationHeader.css";
type Props = {};

function NavigationHeader({}: Props) {
    const { user } = useContext(AuthContext);
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
                            id: uuidv4(),
                            userId: user.id,
                            title: "",
                            monthlyIncome: "",
                            expanses: [],
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
