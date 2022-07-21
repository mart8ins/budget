import "./signIn.css";
import { useState, useContext } from "react";
import { AuthContext } from "../authContext";

type Props = {};

type Credentials = {
    username: string;
    password: string;
};

function SignIn({}: Props) {
    const {
        user: {
            error: { status, message },
        },
        loggIn,
    } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({} as Credentials);

    // toogle between sign in and sign up
    const [signUp, setSignUp] = useState(false);
    const changeAuthOption = () => {
        setSignUp(!signUp);
    };

    // collect input data
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const submitAuthForm = () => {
        loggIn(signUp, credentials);
    };

    return (
        <div className="auth__container">
            <div className="auth__box">
                <div className="auth__change">
                    <div onClick={changeAuthOption} className={`auth__option ${!signUp && "active__auth__option"}`}>
                        Sign in
                    </div>
                    <div onClick={changeAuthOption} className={`auth__option ${signUp && "active__auth__option"}`}>
                        Sign up
                    </div>
                </div>

                <div className="auth__inputs">
                    {status && <div className="auth__error">{message}</div>}

                    <input onChange={onChangeHandler} className="input__" name="username" placeholder="username" type="text" />
                    <input onChange={onChangeHandler} className="input__" name="password" placeholder="password" type="password" />
                    <button onClick={submitAuthForm} className="submit__button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
