import { useContext } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";
import SignIn from "./components/signIn/SignIn";
import { AuthContext } from "./components/authContext";
import CreateOptionData from "./components/landing/components/createOptionBtns/createOptionHeader/CreateOptionHeader";
import { data } from "./components/navigationContext";

function App() {
    const {
        user: { status },
    } = useContext(AuthContext);

    return (
        <div className="App">
            <Header />
            {status && data && <CreateOptionData />}

            {status ? <Landing /> : <SignIn />}
        </div>
    );
}

export default App;
