import { useContext, useState } from "react";
import { AuthContext } from "../../../authContext";
import { NavigationContext } from "../../../navigationContext";
import "./createTemplate.css";
import { BudgetTemplate, Expanses, PaymentRow } from "../../../../models/models";
import { v4 as uuidv4 } from "uuid";
import SaveTemplateBtn from "./components/saveTemplateBtn/SaveTemplateBtn";
import BlockPreview from "./components/blockPreview/BlockPreview";
import TitleInputs from "./components/titleInputs/TitleInputs";
import BlockTitleInput from "./components/blockTitleInput/BlockTitleInput";
import PaymentRowPreview from "./components/paymentRowPreview/PaymentRowPreview";
import NewPaymentForBlock from "./components/newPaymentForBlock/NewPaymentForBlock";

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
        <div className="template__container">
            {blocks.length > 0 && template.title && template.monthlyIncome && <SaveTemplateBtn saveTemplate={saveTemplate} />}

            <div className="title__inputs__and__blocks__preview__container">
                <TitleInputs handleChangeForTemplate={handleChangeForTemplate} />
                <BlockPreview blocks={blocks} />
            </div>

            {template.title && template.monthlyIncome && (
                <div className="block__title__payment__rows__preview__container">
                    <BlockTitleInput
                        handlePaymentBlockTitle={handlePaymentBlockTitle}
                        blocks={blocks}
                        paymentBlockTitle={paymentBlockTitle}
                    />

                    {paymentBlockTitle &&
                        allPaymentRows.map((payment) => {
                            return <PaymentRowPreview key={payment.id} payment={payment} deletePaymentRow={deletePaymentRow} />;
                        })}

                    {allPaymentRows.length > 0 && (
                        <button className="save__block__btn" onClick={addPaymentBlock}>
                            Save <em>{paymentBlockTitle}</em> block
                        </button>
                    )}
                </div>
            )}

            {paymentBlockTitle && template.title && template.monthlyIncome && (
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

export default CreateTemplate;
