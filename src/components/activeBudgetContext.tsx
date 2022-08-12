import { createContext, useState, useEffect, useContext } from "react";
import { ActiveBudgetContextInterface, ActiveBudget } from "../models/models";
import { AuthContext } from "./authContext";

export const ActiveBudgetContext = createContext({} as ActiveBudgetContextInterface);

const ActiveBudgetContextprovider = ({ children }: any) => {
    const { user } = useContext(AuthContext);

    const [budget, setBudget] = useState<ActiveBudget>({
        id: "",
        userId: "",
        title: "",
        monthlyIncome: "",
        remainingMoney: "",
        expanses: [],
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

    useEffect(() => {
        const activeBudget = user.data.budgets.filter((budget) => {
            return budget.id === user.data.activeBudgetId;
        });
        console.log(budget, "LOL");
        setBudget({
            ...budget,
            ...activeBudget[0],
            totals: { payment: "", payed: "", remaining: "" },
            remainingMoney: "",
        });

        console.log(budget, "LOL2");
    }, [user, user.data.activeBudgetId]);

    // console.log(budget, ">???????");

    return <ActiveBudgetContext.Provider value={{ budget, updateIncome, updateAmount }}>{children}</ActiveBudgetContext.Provider>;
};

export default ActiveBudgetContextprovider;
