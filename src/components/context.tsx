import { createContext, useState, useEffect } from "react";
type Totals = {
    payment: string;
    payed: string;
    remaining: string;
};
type PaymentRow = {
    id: String;
    title: String;
    payment: String;
    payed: String;
    remaining: String;
};

type Expanses = {
    id: string;
    title: string;
    subjects: PaymentRow[];
};

type Budget = {
    id: string;
    userId: string;
    month: string;
    monthlyIncome: string;
    remainingMoney: string;
    expanses: Expanses[];
    totals: Totals;
};

interface BudgetContext {
    budget: Budget;
    updateIncome: (income: string) => void;
}
export const BudgetContext = createContext({} as BudgetContext);

const BudgetContextprovider = ({ children }: any) => {
    const [budget, setBudget] = useState<Budget>({
        id: "133",
        userId: "399",
        month: "June",
        monthlyIncome: "",
        remainingMoney: "",
        expanses: [
            {
                id: "1",
                title: "Aigai",
                subjects: [
                    {
                        id: "3",
                        payed: "55",
                        payment: "120",
                        remaining: "65",
                        title: "Pārtika",
                    },
                    {
                        id: "6",
                        payed: "155",
                        payment: "20",
                        remaining: "135",
                        title: "Apkure",
                    },
                ],
            },
            {
                id: "344",
                title: "Ogresgals",
                subjects: [
                    {
                        id: "3",
                        payed: "55",
                        payment: "120",
                        remaining: "65",
                        title: "Pārtika",
                    },
                    {
                        id: "6",
                        payed: "155",
                        payment: "20",
                        remaining: "135",
                        title: "Apkure",
                    },
                ],
            },
        ],
        totals: { payment: "", payed: "", remaining: "" },
    });

    const updateIncome = (income: string) => {
        setBudget({ ...budget, monthlyIncome: income });
    };

    const calculateTotals = () => {
        let paymentTotal = 0;
        let payedTotal = 0;
        let remainingTotal = 0;

        budget.expanses.forEach((item) => {
            item.subjects.forEach((sub) => {
                paymentTotal += +sub.payment;
                payedTotal += +sub.payed;
                remainingTotal += +sub.remaining;
            });
        });

        let freeMoney = Number(budget.monthlyIncome) - paymentTotal;

        setBudget({
            ...budget,
            totals: {
                payment: String(paymentTotal),
                payed: String(payedTotal),
                remaining: String(remainingTotal),
            },
            remainingMoney: String(freeMoney),
        });
    };

    useEffect(() => {
        calculateTotals();
    }, [budget.expanses, budget.monthlyIncome]);

    return <BudgetContext.Provider value={{ budget, updateIncome }}>{children}</BudgetContext.Provider>;
};

export default BudgetContextprovider;
