import { useContext } from "react";
import "./landing.css";
import { AuthContext } from "../authContext";
import { NavigationContext } from "../navigationContext";

import CreateBudget from "./components/createBudget/CreateBudget";
import SeeTemplates from "./components/seeTemplates/SeeTemplates";
import SeeBudgets from "./components/seeBudgets/SeeBudgets";
import Budget from "../budget/Budget";

type Props = {};

function Landing({}: Props) {
    const { navigateTo, seeBudgets } = useContext(NavigationContext);
    const { user } = useContext(AuthContext);
    return (
        <div className="landing__container">
            {navigateTo === "createTemplate" && <CreateBudget />}
            {navigateTo === "createBudget" && <CreateBudget />}
            {navigateTo === "seeTemplates" && <SeeTemplates />}
            {navigateTo === "seeBudgets" && <SeeBudgets />}
            {navigateTo === "" && user.data.activeBudgetId && <Budget />}

            {navigateTo === "" && !user.data.activeBudgetId && (
                <div className="select__active__budget">
                    <h4 onClick={seeBudgets}>Select active budget</h4>
                </div>
            )}
        </div>
    );
}

export default Landing;
