import { useState, createContext } from "react";

export const Users = createContext();

export function UsersProvider ( {children} ) {
    const [users, setUsers] = useState([]);
    return (
        <Users.Provider value={[users, setUsers]}>
            {children}
        </Users.Provider>
    );
}
