import "./expanses.css";
import InputCell from "./components/InputCell";

type PaymentRow = {
    id: string;
    title: string;
    payment: string;
    payed: string;
    remaining: string;
};

type Props = {
    title: string;
    expansesId: string;
    subjects: PaymentRow[];
};

function Expanses({ title, subjects, expansesId }: Props) {
    return (
        <div className="expanses__type">
            <div className="expanses__title">{title}</div>
            {subjects &&
                subjects.map((item, i) => {
                    return (
                        <div key={`${item.id}`} id={`${item.id}`} className="payment__row">
                            <div className="payment__cell payment__for">{item.title}</div>
                            <InputCell name={"payment"} value={`${item.payment}`} expansesId={`${expansesId}`} subjectId={item.id} />
                            <InputCell name={"payed"} value={`${item.payed}`} expansesId={`${expansesId}`} subjectId={item.id} />
                            <InputCell name={"remaining"} value={`${item.remaining}`} expansesId={`${expansesId}`} subjectId={item.id} />
                        </div>
                    );
                })}
        </div>
    );
}

export default Expanses;
