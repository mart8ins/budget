import "./budgetHeading.css";

type Props = {
    cel1: String;
    cel2: String;
    cel3: String;
    cel4: String;
};

function BudgetHeading({ cel1, cel2, cel3, cel4 }: Props) {
    return (
        <div className="budget__heading">
            <div className="cel__heading">{cel1}</div>
            <div className="cel__heading">{cel2}</div>
            <div className="cel__heading">{cel3}</div>
            <div className="cel__heading">{cel4}</div>
        </div>
    );
}

export default BudgetHeading;
