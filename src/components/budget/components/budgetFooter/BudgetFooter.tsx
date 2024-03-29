import { useContext } from "react";
import { ActiveBudgetContext } from "../../../activeBudgetContext";
import "./budgetFooter.css";

type Props = {};

function BudgetFooter({}: Props) {
    const {
        budget: { remainingMoney },
    } = useContext(ActiveBudgetContext);
    return (
        <div className="budget__footer">
            <div className="footer__title">Remaining free money {remainingMoney ? <span>{remainingMoney}</span> : "0"} Euros</div>
        </div>
    );
}

export default BudgetFooter;
