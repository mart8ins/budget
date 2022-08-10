import { useContext } from "react";
import "./blockPreview.css";
import { CreateContext } from "../../../../../createContext";

const BlockPreview = () => {
    const { budget, deletePaymentExpanseB } = useContext(CreateContext);

    return (
        <div className="blocks__preview__container">
            {budget.expanses.map((expanse) => {
                return (
                    <div key={expanse.id} className="block__preview">
                        <h4>
                            {expanse.title} <span onClick={() => deletePaymentExpanseB(expanse.id)}>Delete</span>
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
