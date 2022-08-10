import { createContext, useState, useEffect } from "react";
import { ActiveBudgetContextInterface, ActiveBudget } from "../models/models";

export const ActiveBudgetContext = createContext({} as ActiveBudgetContextInterface);

const ActiveBudgetContextprovider = ({ children }: any) => {
    const [budget, setBudget] = useState<ActiveBudget>({
        id: "133",
        userId: "399",
        title: "June",
        monthlyIncome: "",
        remainingMoney: "",
        expanses: [
            {
                id: "1",
                title: "Aigai",
                subjects: [
                    {
                        id: "3",
                        payed: "",
                        payment: "",
                        remaining: "",
                        title: "Pārtika",
                    },
                    {
                        id: "6",
                        payed: "",
                        payment: "",
                        remaining: "",
                        title: "Apkure",
                    },
                ],
            },
            {
                id: "344",
                title: "Ogresgals",
                subjects: [
                    {
                        id: "31",
                        payed: "",
                        payment: "",
                        remaining: "",
                        title: "Pārtika",
                    },
                    {
                        id: "46",
                        payed: "",
                        payment: "",
                        remaining: "",
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

    const updateAmount = (expansesId: string, subjectId: string, expansesType: string, amount: string) => {
        const allExpanses = [...budget.expanses];
        const filtered = budget.expanses.filter((exp) => {
            return exp.id === expansesId;
        })[0];
        filtered.subjects.forEach((sub: any) => {
            if (sub.id === subjectId) {
                if (expansesType !== "remaining") {
                    sub[expansesType] = amount;
                    let res = +sub.payment - +sub.payed;
                    sub.remaining = String(res);
                }
            }
        });
        const indexOfExp = allExpanses.findIndex((item) => {
            return item.id === filtered.id;
        });
        allExpanses.splice(indexOfExp, 1, filtered);
        setBudget({
            ...budget,
            expanses: allExpanses,
        });
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

    return <ActiveBudgetContext.Provider value={{ budget, updateIncome, updateAmount }}>{children}</ActiveBudgetContext.Provider>;
};

export default ActiveBudgetContextprovider;
