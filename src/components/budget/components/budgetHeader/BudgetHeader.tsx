import { useState, useContext } from "react";
import { BudgetContext } from "../../../context";
import "./budgetHeader.css";

function BudgetHeader() {
    const {
        budget: { month, monthlyIncome },
        updateIncome,
    } = useContext(BudgetContext);
    const [edit, setEdit] = useState(false);

    const inputBlurHandler = () => {
        setEdit(false);
    };

    const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => updateIncome(e.target.value);

    return (
        <div className="budget__header">
            <div className="month">{month}</div>
            <div>
                <div className="monthly__income__heading">{!monthlyIncome ? "Add monthly income" : "Income for month"}</div>
                <div className="monthly__income__input__container">
                    <input
                        className={`monthly__income ${edit && "monthly__income__blured"}`}
                        onChange={inputValueHandler}
                        onBlur={inputBlurHandler}
                        onFocus={() => setEdit(true)}
                        placeholder="income"
                        value={monthlyIncome}
                        type="number"
                    />
                </div>
            </div>
        </div>
    );
}

export default BudgetHeader;
