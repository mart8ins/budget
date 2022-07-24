import { useContext } from "react";
import { AuthContext } from "../../../authContext";
import { NavigationContext } from "../../../navigationContext";
import "./seeBudgets.css";
type Props = {};

function SeeBudgets({}: Props) {
    const {
        user: {
            data: { templates, budgets },
        },
    } = useContext(AuthContext);
    const { navigateTo, createTemplate, seeTemplates, createBudget, seeBudgets } = useContext(NavigationContext);

    return <div className="">See budget</div>;
}

export default SeeBudgets;