import { useContext } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";
import SignIn from "./components/signIn/SignIn";
import { AuthContext } from "./components/authContext";
import NavigationHeader from "./components/landing/components/navigationHeader/NavigationHeader";

function App() {
    const {
        user: { status, data },
    } = useContext(AuthContext);

    return (
        <div className="App">
            <Header />
            {status ? <NavigationHeader /> : null}

            {status ? <Landing /> : <SignIn />}
        </div>
    );
}

export default App;
