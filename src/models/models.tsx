// new BUDGET and new TEMPLATE
export type NewBudget = {
    id: string;
    userId: string;
    title: string;
    monthlyIncome: string;
    expanses: Expanses[];
    template: boolean | null;
};

// ACTIVE BUDGET
export type ActiveBudget = {
    id: string;
    userId: string;
    title: string;
    monthlyIncome: string;
    expanses: Expanses[];
    remainingMoney: string;
    totals: Totals;
};

export type Expanses = {
    id: string;
    title: string;
    subjects: PaymentRow[];
};

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

// ACTIVE BUDGET CONTEXT
export interface ActiveBudgetContextInterface {
    budget: ActiveBudget;
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
        templates: NewBudget[];
        budgets: NewBudget[];
        activeBudgetId: string | null;
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

// CREATE BUDGET CONTEXT
export interface CreateContextInterface {
    budget: NewBudget;
    addBudgetData: (template: NewBudget) => void;
    addExpansesB: (expanses: Expanses[]) => void;
    deletePaymentExpanseB: (expanseId: string) => void;
    saveBudget: () => void;
}
