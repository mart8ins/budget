import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BudgetContextprovider from "./components/context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BudgetContextprovider>
            <App />
        </BudgetContextprovider>
    </React.StrictMode>
);
