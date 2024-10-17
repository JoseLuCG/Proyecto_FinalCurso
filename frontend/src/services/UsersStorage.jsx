import { useState, createContext } from "react";

export const Users = createContext();

export function UsersProvider ( {children} ) {
    const users = useState([]);
    return (
        <Users.Provider value={users}>
            {children}
        </Users.Provider>
    );
}
