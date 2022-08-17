import React, { useState, useContext, useEffect } from "react";
import "./budgetItem.css";
import { NewBudget } from "../../../../../models/models";
import { DataContext } from "../../../../dataContext";
import { ActiveBudgetContext } from "../../../../activeBudgetContext";
import { NavigationContext } from "../../../../navigationContext";

type Props = {
    data: NewBudget;
};

function BudgetItem({ data }: Props) {
    const isTemplate = data.template;

    const { saveBudgetInDataContext, deleteBudgetData } = useContext(DataContext);
    const { seeLandingPage } = useContext(NavigationContext);
    const { clearBudget } = useContext(ActiveBudgetContext);

    const setBudgetAsActive: React.MouseEventHandler = () => {
        // updates all budgets
        saveBudgetInDataContext({ ...data, isActive: true });
    };

    const deleteData = () => {
        if (data.isActive) {
            clearBudget();
        }
        deleteBudgetData(data.id, isTemplate);
    };

    return (
        <div className={`item__container ${data.isActive && "active__container"}`}>
            <div className="item__container__top">
                {data.title}{" "}
                {isTemplate && (
                    <span>
                        <button className="delete__template" onClick={deleteData}>
                            Delete
                        </button>
                    </span>
                )}
            </div>
            {!isTemplate && (
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

                    {data.isActive && (
                        <div className="item__container__bottom__option">
                            <button onClick={seeLandingPage} className="bottom__option__btn">
                                View
                            </button>
                        </div>
                    )}
                    <div className="item__container__bottom__option">
                        <button onClick={deleteData} className="bottom__option__btn delete">
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BudgetItem;
