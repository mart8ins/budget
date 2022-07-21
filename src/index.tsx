import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BudgetContextprovider from "./components/budgetContext";
import AuthContextProvider from "./components/authContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <BudgetContextprovider>
                <App />
            </BudgetContextprovider>
        </AuthContextProvider>
    </React.StrictMode>
);
