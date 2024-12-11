import { OwnUser } from "./OwnUserStorage.jsx";
import { useContext } from "react";
import LoginView from "../Views/LoginView/LoginView.jsx";
import { sessionCookie } from "../tools/defines.mjs";

function Authorization ({children}) {
    //----------States----------
    const [ user ] = useContext(OwnUser);

    return(
        <>
        { sessionCookie ? children : <LoginView/> }
        </>
    );
}

export default Authorization;