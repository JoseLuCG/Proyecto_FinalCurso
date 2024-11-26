import { OwnUser } from "./OwnUserStorage.jsx";
import { useContext } from "react";
import LoginView from "../Views/LoginView/LoginView.jsx";
import { sessionCookie } from "../tools/defines.mjs";

function Authorization ({children}) {
    //----------States----------
    //In mongodb the id will be _id. In SQLite is 'id'.
    const [ user ] = useContext(OwnUser);

    console.log(sessionCookie);

    return(
        <>
        { sessionCookie ? children : <LoginView/> }
        </>
    );
}

export default Authorization;