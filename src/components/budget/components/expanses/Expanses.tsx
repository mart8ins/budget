import "./expanses.css";
import InputCell from "./components/InputCell";

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
                    return (
                        <div key={`${item.id}`} id={`${item.id}`} className="payment__row">
                            <div className="payment__cell payment__for">{item.title}</div>
                            <InputCell name={"payment"} value={`${item.payment}`} expansesId={`${item.id}`} />
                            <InputCell name={"payed"} value={`${item.payed}`} expansesId={`${item.id}`} />
                            <InputCell name={"remaining"} value={`${item.remaining}`} expansesId={`${item.id}`} />
                        </div>
                    );
                })}
        </div>
    );
}

export default Expanses;
