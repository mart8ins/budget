import "./header.css";

function Header() {
    const userName = "Martins";
    const logout = () => {
        console.log("logout poga");
    };
    return (
        <div className="header">
            <div className="user__name">{userName}</div>
            <div className="app__title">Budget</div>
            <div className="app__logout">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Header;
