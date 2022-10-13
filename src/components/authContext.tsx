import { createContext, useState } from "react";
import { AuthContextInterface, User } from "../models/models";
import axios from "axios";
import { serverUrl } from "../vars";

export const AuthContext = createContext({} as AuthContextInterface);

const AuthContextProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>({
        id: "",
        username: "",
        status: false,
        error: {
            status: false,
            message: "",
        },
        data: {
            templates: [],
            budgets: [],
        },
    });

    const loggIn = async (signUp: boolean, credentials: { username: string; password: string }) => {
        // SIGN UP NEW USER
        if (signUp) {
            const resp = await axios.post(`${serverUrl}budget/user`, {
                username: credentials.username,
                password: credentials.password,
                action: signUp,
            });

            setUser({
                id: resp.data.userId,
                username: credentials.username,
                status: resp.data.status,
                error: {
                    status: false,
                    message: "",
                },
                data: {
                    templates: [],
                    budgets: [],
                },
            });
        }
        if (!signUp) {
            // SIGN IN

            const resp = await axios.post(`${serverUrl}budget/user`, {
                username: credentials.username,
                password: credentials.password,
                action: signUp,
            });
            if (resp.data.status) {
                const budgetResponse = await axios.get(`${serverUrl}budget`, {
                    params: { userId: resp.data.userId },
                });
                await setUser({
                    id: resp.data.userId,
                    username: credentials.username,
                    status: true,
                    error: {
                        status: false,
                        message: "",
                    },
                    data: {
                        templates: budgetResponse.data.templates,
                        budgets: budgetResponse.data.budgets,
                    },
                });
            } else {
                setUser({
                    id: "",
                    username: "",
                    status: false,
                    error: {
                        status: true,
                        message: "Invalid credentials",
                    },
                    data: {
                        templates: [],
                        budgets: [],
                    },
                });
            }
        }
    };

    const logout = () => {
        setUser({
            id: "",
            username: "",
            status: false,
            error: {
                status: false,
                message: "",
            },
            data: {
                templates: [],
                budgets: [],
            },
        });
    };

    return <AuthContext.Provider value={{ user, loggIn, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
