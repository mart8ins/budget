import { useContext, useState, useRef } from "react";
import { BudgetContext } from "../../../../context";

type Props = {
    name: string;
    value: string;
    expansesId: string;
};

function InputCell({ name, value, expansesId }: Props) {
    const [val, setVal] = useState(value);
    const { updateAmount } = useContext(BudgetContext);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handlePaymentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
    };

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        const expId = e.target.dataset.expansesId;
        const expansesType = e.target.name;
        if (expId && expansesType && val) {
            updateAmount(expId, expansesType, val);
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
            data-expanses-id={expansesId}
            onBlur={blurHandler}
        />
    );
}

export default InputCell;
