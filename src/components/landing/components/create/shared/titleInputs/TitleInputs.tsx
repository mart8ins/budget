import { useContext } from "react";
import "./titleInputs.css";
import { CreateTemplateContext } from "../../../../../createTemplateContext";
import { CreateBudgetContext } from "../../../../../createBudgetContext";
type Props = {
    inputFor: string;
};
function TitleInputs({ inputFor }: Props) {
    const { addTemplateData, template } = useContext(CreateTemplateContext);
    const { addBudgetData, budget } = useContext(CreateBudgetContext);

    const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputFor === "template" &&
            addTemplateData({
                ...template,
                [e.target.name]: e.target.value,
            });

        inputFor === "budget" &&
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
            />
        </div>
    );
}

export default TitleInputs;
