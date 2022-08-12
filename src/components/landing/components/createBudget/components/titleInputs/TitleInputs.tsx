import { useContext } from "react";
import "./titleInputs.css";
import { CreateContext } from "../../../../../createContext";

function TitleInputs() {
    const { addBudgetData, budget } = useContext(CreateContext);

    const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        addBudgetData({
            ...budget,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="title__inputs">
            <input
                className="title__inputs__input"
                onChange={handleInputData}
                type="text"
                name="title"
                id="title"
                placeholder="Enter title"
            />
            <input
                className="title__inputs__input"
                onChange={handleInputData}
                type="number"
                name="monthlyIncome"
                id="monthlyIncome"
                placeholder="Monthly income"
                value={budget.monthlyIncome}
            />
        </div>
    );
}

export default TitleInputs;
