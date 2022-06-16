import "./budgetFooter.css";

type Props = {};

function BudgetFooter({}: Props) {
    return (
        <div className="budget__footer">
            <div className="footer__title">
                Remaining free money <span>405</span> Euro
            </div>
        </div>
    );
}

export default BudgetFooter;
