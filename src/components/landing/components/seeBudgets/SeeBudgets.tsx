import { useContext, useState } from "react";
import { NewBudget } from "../../../../models/models";
import { DataContext } from "../../../dataContext";
import BudgetItem from "./components/BudgetItem";
import "./seeBudgets.css";
type Props = {};

function SeeBudgets({}: Props) {
    const { allBudgets, allTemplates } = useContext(DataContext);

    const [activeTab, setActiveTab] = useState("budgets");

    return (
        <div className="see__budgets__container">
            <div className="tab__nav">
                <button
                    onClick={() => setActiveTab("templates")}
                    className={`tab__nav__btn ${activeTab === "templates" && "active__budget__tab"}`}>
                    Templates <span>{allTemplates && allTemplates.length}</span>
                </button>
                <button
                    onClick={() => setActiveTab("budgets")}
                    className={`tab__nav__btn ${activeTab === "budgets" && "active__budget__tab"}`}>
                    Budgets <span>{allBudgets && allBudgets.length}</span>
                </button>
            </div>

            <div>
                {(activeTab === "templates" ? allTemplates : allBudgets).map((item: NewBudget) => {
                    return <BudgetItem key={item.id} data={item} />;
                })}
            </div>
        </div>
    );
}

export default SeeBudgets;
