import { useContext } from "react";
import "./blockPreview.css";
import { CreateTemplateContext } from "../../../../../createTemplateContext";
import { CreateBudgetContext } from "../../../../../createBudgetContext";
type Props = {
    previewFor: string;
};
const BlockPreview = ({ previewFor }: Props) => {
    const { template, deletePaymentExpanse } = useContext(CreateTemplateContext);
    const { budget, deletePaymentExpanseB } = useContext(CreateBudgetContext);

    const dataT = previewFor === "template" ? template : budget;
    const deleteT = (id: string) => {
        previewFor === "template" ? deletePaymentExpanse(id) : deletePaymentExpanseB(id);
    };

    return (
        <div className="blocks__preview__container">
            {dataT.expanses.map((expanse) => {
                return (
                    <div key={expanse.id} className="block__preview">
                        <h4>
                            {expanse.title} <span onClick={() => deleteT(expanse.id)}>Delete</span>
                        </h4>

                        {expanse.subjects.map((payment) => {
                            return (
                                <p key={payment.id}>
                                    {payment.title} <span>{payment.payment}</span>
                                </p>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default BlockPreview;
