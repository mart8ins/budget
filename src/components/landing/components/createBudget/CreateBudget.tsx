import { useContext } from "react";
import { AuthContext } from "../../../authContext";
import { NavigationContext } from "../../../navigationContext";
import "./createBudget.css";
type Props = {};

function CreateBudget({}: Props) {
    const {
        user: {
            data: { templates, budgets },
        },
    } = useContext(AuthContext);
    const { navigateTo, createTemplate, seeTemplates, createBudget, seeBudgets } = useContext(NavigationContext);

    return <div className="">Create budget</div>;
}

export default CreateBudget;
