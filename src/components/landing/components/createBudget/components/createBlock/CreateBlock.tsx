import React, { useState, useContext } from "react";
import "./createBlock.css";
import { v4 as uuidv4 } from "uuid";
import { PaymentRow } from "../../../../../../models/models";
import PaymentRowPreview from "./paymentRowPreview/PaymentRowPreview";
import NewPaymentForBlock from "./newPaymentForBlock/NewPaymentForBlock";
import { CreateContext } from "../../../../../createContext";

function CreateBlock() {
    const {
        budget: { expanses, title, monthlyIncome },
        addExpansesB,
    } = useContext(CreateContext);

    const [paymentBlockTitle, setPaymentBlockTitle] = useState("");
    const handlePaymentBlockTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentBlockTitle(e.target.value);
    };

    const [allPaymentRows, setAllPaymentRows] = useState<PaymentRow[]>([]);
    const [paymentRow, setPaymentRow] = useState<PaymentRow>({
        id: uuidv4(),
        title: "",
        payment: "",
        payed: "",
        remaining: "",
    });

    const addPaymentBlock = () => {
        // add block
        addExpansesB([...expanses, { id: uuidv4(), title: paymentBlockTitle, subjects: allPaymentRows }]);
        // clear block title and rows
        setPaymentBlockTitle("");
        setAllPaymentRows([]);
    };

    const deletePaymentRow = (paymentId: string) => {
        const updateAfterDelete = allPaymentRows.filter((item) => {
            return item.id !== paymentId;
        });
        setAllPaymentRows(updateAfterDelete);
    };

    const handleChangeForPaymentRow = (e: React.ChangeEvent<HTMLInputElement>) => {
        let rem = "";
        if (e.target.name === "payment") {
            rem = e.target.value;
        }
        setPaymentRow({
            ...paymentRow,
            [e.target.name]: e.target.value,
            remaining: rem,
        });
    };

    const addPaymentRow = () => {
        // save payment row
        setAllPaymentRows([...allPaymentRows, paymentRow]);
        // clear payment rows inputs
        setPaymentRow({
            id: uuidv4(),
            title: "",
            payment: "",
            payed: "",
            remaining: "",
        });
    };

    return (
        <div className="create__block__container">
            <input
                className="block__title__input"
                onChange={handlePaymentBlockTitle}
                type="text"
                name="title"
                id="title"
                placeholder="Add block"
                value={paymentBlockTitle}
            />

            {paymentBlockTitle &&
                allPaymentRows.map((payment) => {
                    return <PaymentRowPreview key={payment.id} payment={payment} deletePaymentRow={deletePaymentRow} />;
                })}

            {allPaymentRows.length > 0 && paymentBlockTitle && (
                <button className="save__block__btn" onClick={addPaymentBlock}>
                    Save <em>{paymentBlockTitle}</em> block
                </button>
            )}

            {paymentBlockTitle && title && monthlyIncome && (
                <div>
                    <NewPaymentForBlock
                        handleChangeForPaymentRow={handleChangeForPaymentRow}
                        paymentRow={paymentRow}
                        addPaymentRow={addPaymentRow}
                    />
                </div>
            )}
        </div>
    );
}

export default CreateBlock;
