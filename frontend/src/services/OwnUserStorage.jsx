import { useState, createContext } from "react";

export const OwnUser = createContext();

export function OwnUserProvider ( {children} ) {
    const [ownUser, setOwnUser] = useState({
        nameProfile: "",
        nameUser: "",
        password: "",
        location:"",
        interest: [""],
        age: 0,
        description: "",
        email: "",
        photo:""
    });
    return (
        <OwnUser.Provider value={[ownUser, setOwnUser]}>
            {children}
        </OwnUser.Provider>
    );
}
