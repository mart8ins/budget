import React from "react";
import "./newPaymentForBlock.css";
import { PaymentRow } from "../../../../../../models/models";

type Props = {
    handleChangeForPaymentRow: (e: React.ChangeEvent<HTMLInputElement>) => void;
    paymentRow: PaymentRow;
    addPaymentRow: () => void;
};

function NewPaymentForBlock({ handleChangeForPaymentRow, paymentRow, addPaymentRow }: Props) {
    return (
        <div className="new__payment__block__container">
            <div className="new__payment__input__container">
                <input
                    className="new__payment__input"
                    onChange={handleChangeForPaymentRow}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Payment for"
                    value={paymentRow.title}
                />
                <input
                    className="new__payment__input"
                    onChange={handleChangeForPaymentRow}
                    type="number"
                    name="payment"
                    id="payment"
                    placeholder="Payment"
                    value={paymentRow.payment}
                />
            </div>
            {paymentRow.payment && (
                <button className="add__payment__row__btn" onClick={addPaymentRow}>
                    Add payment
                </button>
            )}
        </div>
    );
}

export default NewPaymentForBlock;
