import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ActiveBudgetContextprovider from "./components/activeBudgetContext";
import AuthContextProvider from "./components/authContext";
import NavigationContextProvider from "./components/navigationContext";
import CreateTemplateContextprovider from "./components/createTemplateContext";
import DataContextProvider from "./components/dataContext";
import CreateBudgetContextprovider from "./components/createBudgetContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <NavigationContextProvider>
                <DataContextProvider>
                    <CreateBudgetContextprovider>
                        <CreateTemplateContextprovider>
                            <ActiveBudgetContextprovider>
                                <App />
                            </ActiveBudgetContextprovider>
                        </CreateTemplateContextprovider>
                    </CreateBudgetContextprovider>
                </DataContextProvider>
            </NavigationContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
