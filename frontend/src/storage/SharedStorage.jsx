import { useState, createContext } from "react";

export const Context = createContext();

export function ContextProvider ( {children} ) {
    const store = useState({
        nameProfile: "",
        nameUser: "",
    });
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
}
