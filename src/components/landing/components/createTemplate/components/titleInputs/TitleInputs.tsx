import "./titleInputs.css";

type Props = {
    handleChangeForTemplate: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TitleInputs({ handleChangeForTemplate }: Props) {
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
