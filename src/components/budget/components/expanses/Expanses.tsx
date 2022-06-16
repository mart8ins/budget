import React from "react";
import "./expanses.css";

type PaymentRow = {
    id: String;
    title: String;
    payment: String;
    payed: String;
    remaining: String;
};

type Props = {
    title: String;
    subjects: PaymentRow[];
};

function Expanses({ title, subjects }: Props) {
    return (
        <div className="expanses__type">
            <div className="expanses__title">{title}</div>
            {subjects &&
                subjects.map((item, i) => {
                    console.log(item.id);
                    return (
                        <div key={`${item.id}`} className="payment__row">
                            <div className="payment__cell payment__for">{item.title}</div>
                            <div className="payment__cell payment__amount">{item.payment}</div>
                            <div className="payment__cell payment__amount">{item.payed}</div>
                            <div className="payment__cell payment__amount">{item.remaining}</div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Expanses;
