import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BudgetContextprovider from "./components/budgetContext";
import AuthContextProvider from "./components/authContext";
import NavigationContextProvider from "./components/navigationContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <NavigationContextProvider>
                <BudgetContextprovider>
                    <App />
                </BudgetContextprovider>
            </NavigationContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
