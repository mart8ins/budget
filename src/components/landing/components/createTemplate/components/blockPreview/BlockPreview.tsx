import "./blockPreview.css";
import { Expanses } from "../../../../../../models/models";

type Props = {
    blocks: Expanses[];
};

const BlockPreview = ({ blocks }: Props) => {
    return (
        <div className="blocks__preview__container">
            {blocks.map((block) => {
                return (
                    <div key={block.id} className="block__preview">
                        <h4>{block.title}</h4>

                        {block.subjects.map((payment) => {
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
