import "./header.css";
import { useContext } from "react";
import { AuthContext } from "../authContext";
import { NavigationContext } from "../navigationContext";

function Header() {
    const {
        user: { username, status },
        logout,
    } = useContext(AuthContext);
    const { seeLandingPage } = useContext(NavigationContext);

    return (
        <div className="header">
            <div className="user__name">{username}</div>
            <div onClick={seeLandingPage} className="app__title">
                Budget
            </div>
            <div className="app__logout">{status && <button onClick={logout}>Logout</button>}</div>
        </div>
    );
}

export default Header;
