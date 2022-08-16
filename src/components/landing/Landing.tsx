import { useContext, useEffect, useState } from "react";
import "./landing.css";
import { NavigationContext } from "../navigationContext";

import CreateBudget from "./components/createBudget/CreateBudget";
import SeeBudgets from "./components/seeBudgets/SeeBudgets";
import Budget from "../budget/Budget";
import { DataContext } from "../dataContext";

type Props = {};

function Landing({}: Props) {
    const { navigateTo, seeBudgets } = useContext(NavigationContext);
    const { allBudgets } = useContext(DataContext);
    const [activeBudgetId, setActiveBudgetId] = useState("");

    useEffect(() => {
        allBudgets.forEach((item) => {
            if (item.isActive) {
                setActiveBudgetId(item.id);
            }
        });
    }, [allBudgets]);

    return (
        <div className="landing__container">
            {navigateTo === "createTemplate" && <CreateBudget />}
            {navigateTo === "createBudget" && <CreateBudget />}
            {navigateTo === "seeBudgets" && <SeeBudgets />}
            {navigateTo === "" && activeBudgetId && <Budget />}

            {navigateTo === "" && !activeBudgetId && (
                <div className="select__active__budget">
                    <h4 onClick={seeBudgets}>Select active budget</h4>
                </div>
            )}
        </div>
    );
}

export default Landing;
