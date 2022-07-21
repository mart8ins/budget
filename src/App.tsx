import { useContext } from "react";
import "./App.css";
import Budget from "./components/budget/Budget";
import Header from "./components/header/Header";
import SignIn from "./components/signIn/SignIn";
import { AuthContext } from "./components/authContext";

function App() {
    const {
        user: { status },
    } = useContext(AuthContext);

    return (
        <div className="App">
            <Header />
            {status ? <Budget /> : <SignIn />}
        </div>
    );
}

export default App;
