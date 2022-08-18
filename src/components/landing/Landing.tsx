import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./landing.css";
import { NavigationContext } from "../navigationContext";

import CreateBudget from "./components/createBudget/CreateBudget";
import SeeBudgets from "./components/seeBudgets/SeeBudgets";
import Budget from "../budget/Budget";
import { DataContext } from "../dataContext";
import { CreateContext } from "../createContext";
import { AuthContext } from "../authContext";

type Props = {};

function Landing({}: Props) {
    const { navigateTo, seeBudgets, createBudget, createTemplate } = useContext(NavigationContext);
    const { allBudgets, allTemplates } = useContext(DataContext);
    const { addBudgetData } = useContext(CreateContext);
    const { user } = useContext(AuthContext);
    const [activeBudgetId, setActiveBudgetId] = useState("");

    useEffect(() => {
        if (allBudgets.length === 0) {
            setActiveBudgetId("");
        } else {
            setActiveBudgetId("");
            allBudgets.forEach((item) => {
                if (item.isActive) {
                    setActiveBudgetId(item.id);
                }
            });
        }
    }, [allBudgets]);

    return (
        <div className="landing__container">
            {navigateTo === "createTemplate" && <CreateBudget />}
            {navigateTo === "createBudget" && <CreateBudget />}
            {navigateTo === "seeBudgets" && <SeeBudgets />}
            {navigateTo === "" && activeBudgetId && <Budget />}

            {navigateTo === "" && !activeBudgetId && allBudgets.length > 0 && (
                <div className="select__active__budget select__valid" onClick={seeBudgets}>
                    <h4>Select active budget</h4>
                </div>
            )}

            {navigateTo === "" && !activeBudgetId && allBudgets.length === 0 && allTemplates.length > 0 && (
                <div className="select__active__budget select__valid" onClick={createBudget}>
                    <h4>Create your first budget</h4>
                </div>
            )}

            {navigateTo === "" && allBudgets.length === 0 && allTemplates.length === 0 && (
                <div className="select__active__budget" onClick={createBudget}>
                    <h4>Create budget</h4>
                </div>
            )}
            {navigateTo === "" && allTemplates.length === 0 && allBudgets.length === 0 && (
                <div
                    className="select__active__budget"
                    onClick={() => {
                        createTemplate();
                        addBudgetData({
                            id: uuidv4(),
                            userId: user.id,
                            title: "",
                            monthlyIncome: "",
                            expanses: [],
                            template: true,
                            isActive: false,
                        });
                    }}>
                    <h4>Create template</h4>
                </div>
            )}
        </div>
    );
}

export default Landing;
