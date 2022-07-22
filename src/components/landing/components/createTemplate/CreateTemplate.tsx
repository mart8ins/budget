import { useContext } from "react";
import { AuthContext } from "../../../authContext";
import { NavigationContext } from "../../../navigationContext";
import "./createTemplate.css";
type Props = {};

function CreateTemplate({}: Props) {
    const {
        user: {
            data: { templates, budgets },
        },
    } = useContext(AuthContext);
    const { navigateTo, createTemplate, seeTemplates, createBudget, seeBudgets } = useContext(NavigationContext);

    return <div className="">Create template</div>;
}

export default CreateTemplate;
