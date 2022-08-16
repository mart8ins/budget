import React, { useState, useContext, useEffect } from "react";
import "./budgetItem.css";
import { NewBudget } from "../../../../../models/models";
import { DataContext } from "../../../../dataContext";
import { ActiveBudgetContext } from "../../../../activeBudgetContext";

type Props = {
    data: NewBudget;
};

function BudgetItem({ data }: Props) {
    const isTemplate = data.template;
    const [showBudget, setShowBudget] = useState(false);

    const { saveBudget } = useContext(DataContext);

    const setBudgetAsActive: React.MouseEventHandler = () => {
        // updates all budgets
        saveBudget({ ...data, isActive: true });
    };

    return (
        <div className="item__container">
            <div className="item__container__top">{data.title}</div>
            <div className="item__container__bottom">
                {data.isActive ? (
                    <div className="budget__is__active">
                        <span>Active</span>
                    </div>
                ) : (
                    <div className="item__container__bottom__option">
                        <button onClick={setBudgetAsActive} className="bottom__option__btn">
                            Set as active
                        </button>
                    </div>
                )}

                <div className="item__container__bottom__option">
                    <button className="bottom__option__btn">View</button>
                </div>
                <div className="item__container__bottom__option">
                    <button className="bottom__option__btn delete">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BudgetItem;
