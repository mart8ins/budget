import React from "react";
import "./App.css";
import Budget from "./components/budget/Budget";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Budget />
        </div>
    );
}

export default App;
