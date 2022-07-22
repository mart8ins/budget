// BUDGET
export type Totals = {
    payment: string;
    payed: string;
    remaining: string;
};
export type PaymentRow = {
    id: string;
    title: string;
    payment: string;
    payed: string;
    remaining: string;
};

export type Expanses = {
    id: string;
    title: string;
    subjects: PaymentRow[];
};

export type Budget = {
    id: string;
    userId: string;
    month: string;
    monthlyIncome: string;
    remainingMoney: string;
    expanses: Expanses[];
    totals: Totals;
};
