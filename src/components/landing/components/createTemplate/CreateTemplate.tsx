import { useContext, useState } from "react";
import { AuthContext } from "../../../authContext";
import { NavigationContext } from "../../../navigationContext";
import "./createTemplate.css";
import { BudgetTemplate, Expanses, PaymentRow } from "../../../../models/models";
import { v4 as uuidv4 } from "uuid";

function CreateTemplate() {
    const { user } = useContext(AuthContext);

    // TEMPLATES TITLE AND INCOMES
    const [template, setTemplate] = useState<BudgetTemplate>({
        id: uuidv4(),
        userId: user.id,
        title: "",
        monthlyIncome: "",
    });
    const handleChangeForTemplate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemplate({
            ...template,
            [e.target.name]: e.target.value,
        });
    };

    // ALL BLOCKS
    const [blocks, setBlocks] = useState<Expanses[]>([]);

    // PAYMENT BLOCK TITLE
    const [paymentBlockTitle, setPaymentBlockTitle] = useState("");
    const handlePaymentBlockTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentBlockTitle(e.target.value);
    };
    // PAYMENT ROW FOR BLOCK
    const [allPaymentRows, setAllPaymentRows] = useState<PaymentRow[]>([]);
    const [paymentRow, setPaymentRow] = useState<PaymentRow>({
        id: uuidv4(),
        title: "",
        payment: "",
        payed: "",
        remaining: "",
    });
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
    const deletePaymentRow = (paymentId: string) => {
        const updateAfterDelete = allPaymentRows.filter((item) => {
            return item.id !== paymentId;
        });
        setAllPaymentRows(updateAfterDelete);
    };

    const addPaymentBlock = () => {
        // add block
        setBlocks([...blocks, { id: uuidv4(), title: paymentBlockTitle, subjects: allPaymentRows }]);
        // clear block title and rows
        setPaymentBlockTitle("");
        setAllPaymentRows([]);
    };

    const saveTemplate = () => {
        console.log(template);
        console.log(blocks);
    };
    return (
        <div className="">
            {blocks.length > 0 && template.title && template.monthlyIncome && (
                <div>
                    <button onClick={saveTemplate}>Save template</button>
                </div>
            )}
            <div>
                <div>
                    <input onChange={handleChangeForTemplate} type="text" name="title" id="title" placeholder="Enter title" />
                    <input
                        onChange={handleChangeForTemplate}
                        type="number"
                        name="monthlyIncome"
                        id="monthlyIncome"
                        placeholder="Monthly income"
                    />
                </div>

                <div>
                    {blocks.map((block) => {
                        return (
                            <div>
                                <h3>{block.title}</h3>
                                <div>
                                    {block.subjects.map((payment) => {
                                        return (
                                            <p>
                                                {payment.title} <span>{payment.payment}</span>
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {template.title && template.monthlyIncome && (
                <div>
                    <input
                        onChange={handlePaymentBlockTitle}
                        type="text"
                        name="title"
                        id="title"
                        placeholder={blocks.length > 0 ? "Add new payment block title" : "Add payment block title"}
                        value={paymentBlockTitle}
                    />

                    {paymentBlockTitle &&
                        allPaymentRows.map((payment) => {
                            return (
                                <div>
                                    <p>
                                        {payment.title} <span>{payment.payment}</span>
                                    </p>
                                    <button onClick={() => deletePaymentRow(payment.id)}>Delete</button>
                                </div>
                            );
                        })}
                </div>
            )}

            {paymentBlockTitle && template.title && template.monthlyIncome && (
                <div>
                    <div>
                        <div>
                            <input
                                onChange={handleChangeForPaymentRow}
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Payment for"
                                value={paymentRow.title}
                            />
                            <input
                                onChange={handleChangeForPaymentRow}
                                type="number"
                                name="payment"
                                id="payment"
                                placeholder="Payment"
                                value={paymentRow.payment}
                            />
                            <div>
                                <button disabled={!paymentRow.title || (!paymentRow.payment && true)} onClick={addPaymentRow}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                    {allPaymentRows.length > 0 && (
                        <div>
                            <button onClick={addPaymentBlock}>Add block</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CreateTemplate;
