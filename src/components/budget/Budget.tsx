import "./budget.css";
import BudgetHeader from "./components/budgetHeader/BudgetHeader";
import BudgetHeading from "./components/budgetHeading/BudgetHeading";
import Expanses from "./components/expanses/Expanses";
import BudgetFooter from "./components/budgetFooter/BudgetFooter";

import { budget } from "../../models/Budget";

type Props = {};

function Budget({}: Props) {
    return (
        <div className="container">
            <div className="budget__wrapper">
                <BudgetHeader />
                <BudgetHeading cel1="" cel2="Expenses" cel3="Amount payed" cel4="Remaining payment" />

                {budget.expanses.map((item) => {
                    return <Expanses key={item.id} title={item.title} subjects={item.subjects} />;
                })}

                <BudgetHeading cel1="Total" cel2="210" cel3="125" cel4="105" />
                <BudgetFooter />
            </div>
        </div>
    );
}

export default Budget;
