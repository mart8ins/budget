import { useContext, useState, useRef } from "react";
import { BudgetContext } from "../../../../context";

type Props = {
    name: string;
    value: string;
    expansesId: string;
    subjectId: string;
};

function InputCell({ name, value, expansesId, subjectId }: Props) {
    const [val, setVal] = useState(value);
    const { updateAmount } = useContext(BudgetContext);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handlePaymentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
    };

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        const subjId = e.target.dataset.subjectId;
        const expansesType = e.target.name;
        if (subjId && expansesId && expansesType) {
            updateAmount(expansesId, subjId, expansesType, val);
        }
    };

    return (
        <input
            ref={inputRef}
            name={name}
            onChange={handlePaymentInput}
            className="payment__cell payment__amount"
            value={val}
            type="number"
            data-subject-id={subjectId}
            onBlur={blurHandler}
            placeholder="0"
        />
    );
}

export default InputCell;
