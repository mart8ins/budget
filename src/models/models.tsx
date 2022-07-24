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

// BUDGET CONTEXT
export interface BudgetContextInterface {
    budget: Budget;
    updateIncome: (income: string) => void;
    updateAmount: (expansesId: string, subjectId: string, expansesType: string, amount: string) => void;
}

// USER
export type User = {
    id: string;
    username: string;
    password: string;
    status: boolean;
    error: { status: boolean; message: string };
    data: {
        templates: {}[];
        budgets: Budget[];
    };
};
// AUTH CONTEXT
export interface AuthContextInterface {
    user: User;
    loggIn: (signUp: boolean, credentials: { username: string; password: string }) => void;
    logout: () => void;
}

// NAVIGATION CONTEXT
export interface NavigationInterface {
    navigateTo: string;
    createTemplate: () => void;
    seeTemplates: () => void;
    createBudget: () => void;
    seeBudgets: () => void;
    seeLandingPage: () => void;
}

// BUDGET TEMPLATE
export type BudgetTemplate = {
    id: string;
    userId: string;
    title: string;
    monthlyIncome: string;
};
