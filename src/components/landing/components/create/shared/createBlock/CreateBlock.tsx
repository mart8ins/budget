import React, { useState, useContext } from "react";
import "./createBlock.css";
import { v4 as uuidv4 } from "uuid";
import { PaymentRow, Expanses } from "../../../../../../models/models";
import { CreateTemplateContext } from "../../../../../createTemplateContext";
import PaymentRowPreview from "./paymentRowPreview/PaymentRowPreview";
import NewPaymentForBlock from "./newPaymentForBlock/NewPaymentForBlock";
import { CreateBudgetContext } from "../../../../../createBudgetContext";

type Props = {
    blockFor: string;
};

function CreateBlock({ blockFor }: Props) {
    const { template, addExpanses } = useContext(CreateTemplateContext);
    const { budget, addExpansesB } = useContext(CreateBudgetContext);

    const expanses = blockFor === "template" ? template.expanses : budget.expanses;
    const title = blockFor === "template" ? template.title : budget.title;
    const monthlyIncome = blockFor === "template" ? template.monthlyIncome : budget.monthlyIncome;

    const addExp = (expanses: Expanses[]) => {
        blockFor === "template" ? addExpanses(expanses) : addExpansesB(expanses);
    };

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
        addExp([...expanses, { id: uuidv4(), title: paymentBlockTitle, subjects: allPaymentRows }]);
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
        setPaymentRow({
            ...paymentRow,
            [e.target.name]: e.target.value,
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
