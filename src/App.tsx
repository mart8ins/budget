import { useContext } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";
import SignIn from "./components/signIn/SignIn";
import { AuthContext } from "./components/authContext";
import NavigationHeader from "./components/landing/components/navigationHeader/NavigationHeader";
import { DataContext } from "./components/dataContext";

function App() {
    const {
        user: { status },
    } = useContext(AuthContext);
    const { allBudgets, allTemplates } = useContext(DataContext);

    return (
        <div className="App">
            <Header />
            {status && (allBudgets.length || allTemplates.length) ? <NavigationHeader /> : null}

            {status ? <Landing /> : <SignIn />}
        </div>
    );
}

export default App;
