import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AuthContextInterface, User } from "../models/models";
import { allUsers } from "../models/data";

export const AuthContext = createContext({} as AuthContextInterface);

const AuthContextProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>({
        id: "1",
        username: "Aiga",
        password: "123",
        status: true,
        error: {
            status: false,
            message: "",
        },
        data: {
            templates: [],
            budgets: [],
            activeBudgetId: null,
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
                data: {
                    templates: [],
                    budgets: [],
                    activeBudgetId: null,
                },
            });
        }
        if (!signUp) {
            // 1. send data to server, check it if user exists
            // 2. *************  this is only for test uses before backend
            const userExists = allUsers.filter((user) => {
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
                    data: {
                        templates: userExists[0].data.templates,
                        budgets: userExists[0].data.budgets,
                        activeBudgetId: userExists[0].data.activeBudgetId,
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
                    data: {
                        templates: [],
                        budgets: [],
                        activeBudgetId: null,
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
            data: {
                templates: [],
                budgets: [],
                activeBudgetId: null,
            },
        });
    };

    return <AuthContext.Provider value={{ user, loggIn, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
