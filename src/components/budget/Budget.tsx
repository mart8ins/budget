import { useContext } from "react";
import "./budget.css";
import BudgetHeader from "./components/budgetHeader/BudgetHeader";
import BudgetHeading from "./components/budgetHeading/BudgetHeading";
import Expanses from "./components/expanses/Expanses";
import BudgetFooter from "./components/budgetFooter/BudgetFooter";
import { ActiveBudgetContext } from "../activeBudgetContext";

type Props = {};

function Budget({}: Props) {
    const {
        budget: { expanses, totals },
    } = useContext(ActiveBudgetContext);
    return (
        <div className="container">
            <div className="budget__wrapper">
                <BudgetHeader />
                <BudgetHeading cel1="" cel2="Expenses" cel3="Amount payed" cel4="Remaining payment" />

                {expanses.map((item) => {
                    return <Expanses key={item.id} title={item.title} expansesId={item.id} subjects={item.subjects} />;
                })}

                <BudgetHeading cel1="Total" cel2={totals.payment} cel3={totals.payed} cel4={totals.remaining} />
                <BudgetFooter />
            </div>
        </div>
    );
}

export default Budget;
