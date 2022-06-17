import { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider ( {children} ) {
    const store = useState({
        nameProfile: "",
        nameUser: "",
        password: "",
        location:"",
        interest: [],
        age: 0,
        description: "",
        email: "",
        photo:""
    });
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
}
