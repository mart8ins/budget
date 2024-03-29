import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ActiveBudgetContextprovider from "./components/activeBudgetContext";
import AuthContextProvider from "./components/authContext";
import NavigationContextProvider from "./components/navigationContext";
import DataContextProvider from "./components/dataContext";
import CreateContextprovider from "./components/createContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <NavigationContextProvider>
                <DataContextProvider>
                    <CreateContextprovider>
                        <ActiveBudgetContextprovider>
                            <App />
                        </ActiveBudgetContextprovider>
                    </CreateContextprovider>
                </DataContextProvider>
            </NavigationContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
