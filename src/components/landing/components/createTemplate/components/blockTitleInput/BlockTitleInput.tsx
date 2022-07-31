import React from "react";
import "./blockTitleInput.css";
import { Expanses } from "../../../../../../models/models";

type Props = {
    handlePaymentBlockTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    blocks: Expanses[];
    paymentBlockTitle: string;
};

function BlockTitleInput({ handlePaymentBlockTitle, blocks, paymentBlockTitle }: Props) {
    return (
        <input
            className="block__title__input"
            onChange={handlePaymentBlockTitle}
            type="text"
            name="title"
            id="title"
            placeholder="Add block"
            value={paymentBlockTitle}
        />
    );
}

export default BlockTitleInput;
