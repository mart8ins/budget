import { useContext } from "react";
import "./titleInputs.css";
import { CreateTemplateContext } from "../../../../../createTemplateContext";

function TitleInputs() {
    const { addTemplateData, template } = useContext(CreateTemplateContext);
    const handleChangeForTemplate = (e: React.ChangeEvent<HTMLInputElement>) => {
        addTemplateData({
            ...template,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="title__inputs">
            <input
                className="title__inputs__input"
                onChange={handleChangeForTemplate}
                type="text"
                name="title"
                id="title"
                placeholder="Enter title"
            />
            <input
                className="title__inputs__input"
                onChange={handleChangeForTemplate}
                type="number"
                name="monthlyIncome"
                id="monthlyIncome"
                placeholder="Monthly income"
            />
        </div>
    );
}

export default TitleInputs;
