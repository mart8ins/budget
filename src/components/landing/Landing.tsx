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
    const { navigateTo } = useContext(NavigationContext);
    const {
        user: { data },
    } = useContext(AuthContext);
    return (
        <div className="landing__container">
            {navigateTo === "createTemplate" && <CreateBudget />}
            {navigateTo === "createBudget" && <CreateBudget />}
            {navigateTo === "seeTemplates" && <SeeTemplates />}
            {navigateTo === "seeBudgets" && <SeeBudgets />}
            {navigateTo === "" && <Budget />}
        </div>
    );
}

export default Landing;
