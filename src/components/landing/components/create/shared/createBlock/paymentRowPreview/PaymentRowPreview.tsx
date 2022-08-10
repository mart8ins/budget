import "./paymentRowPreview.css";

type Props = {
    deletePaymentRow: (paymentId: string) => void;
    payment: { id: string; title: string; payment: string };
};

function PaymentRowPreview({ deletePaymentRow, payment }: Props) {
    return (
        <div className="payment__row__preview__container" key={payment.id}>
            <div className="payment__item">
                {payment.title}{" "}
                <span>
                    <strong>{payment.payment}</strong> Euro
                </span>
            </div>
            <button className="delete__row__btn" onClick={() => deletePaymentRow(payment.id)}>
                Delete
            </button>
        </div>
    );
}

export default PaymentRowPreview;
