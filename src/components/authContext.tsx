import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

type User = {
    id: string;
    username: string;
    password: string;
    status: boolean;
    error: { status: boolean; message: string };
};
interface AuthContext {
    user: User;
    loggIn: (signUp: boolean, credentials: { username: string; password: string }) => void;
    logout: () => void;
}

const allUser = [
    { id: "1", username: "Mart8ins", password: "123", status: false },
    { id: "2", username: "Aiga", password: "1234", status: false },
];

export const AuthContext = createContext({} as AuthContext);

const AuthContextProvider = ({ children }: any) => {
    const [user, setUser] = useState({
        id: "",
        username: "",
        password: "",
        status: true,
        error: {
            status: false,
            message: "",
        },
    });

    const loggIn = (signUp: boolean, credentials: { username: string; password: string }) => {
        if (signUp) {
            // 1. send data to server, save it and return success or failure with data to setState
            // 2. *************  this is only for test uses before backend
            setUser({
                id: uuidv4(),
                username: credentials.username,
                password: credentials.password,
                status: true,
                error: {
                    status: false,
                    message: "Invalid credentials",
                },
            });
        }
        if (!signUp) {
            // 1. send data to server, check it if user exists
            // 2. *************  this is only for test uses before backend
            const userExists = allUser.filter((user) => {
                return user.username === credentials.username && user.password === credentials.password;
            });
            if (userExists.length) {
                setUser({
                    id: userExists[0].id,
                    username: userExists[0].username,
                    password: userExists[0].password,
                    status: true,
                    error: {
                        status: false,
                        message: "Invalid credentials",
                    },
                });
            } else {
                setUser({
                    id: "",
                    username: "",
                    password: "",
                    status: false,
                    error: {
                        status: true,
                        message: "Invalid credentials",
                    },
                });
            }
        }
    };

    const logout = () => {
        setUser({
            id: "",
            username: "",
            password: "",
            status: false,
            error: {
                status: false,
                message: "",
            },
        });
    };

    return <AuthContext.Provider value={{ user, loggIn, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
