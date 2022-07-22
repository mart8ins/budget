import { useContext } from "react";
import { AuthContext } from "../../../authContext";
import { NavigationContext } from "../../../navigationContext";
import "./seeTemplates.css";
type Props = {};

function SeeTemplates({}: Props) {
    const {
        user: {
            data: { templates, budgets },
        },
    } = useContext(AuthContext);
    const { navigateTo, createTemplate, seeTemplates, createBudget, seeBudgets } = useContext(NavigationContext);

    return <div className="">See templates</div>;
}

export default SeeTemplates;
