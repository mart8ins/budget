import "./header.css";
import { useContext } from "react";
import { AuthContext } from "../authContext";

function Header() {
    const {
        user: { username, status },
        logout,
    } = useContext(AuthContext);

    return (
        <div className="header">
            <div className="user__name">{username}</div>
            <div className="app__title">Budget</div>
            <div className="app__logout">{status && <button onClick={logout}>Logout</button>}</div>
        </div>
    );
}

export default Header;
