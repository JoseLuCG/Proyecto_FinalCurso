import { OwnUser } from "./OwnUserStorage.jsx";
import { useContext } from "react";
import LoginView from "../Views/LoginView/LoginView.jsx";

function Authorization ({children}) {
    //----------States----------
    //In mongodb the id will be _id. In SQLite is 'id'.
    const [ user ] = useContext(OwnUser);
    const sessionCookie = document.cookie.split('; ').some(
        cookie => cookie.startsWith('cookie_session=')
    );

    console.log(sessionCookie);
    

    return(
        <>
        { sessionCookie ? children : <LoginView/> }
        </>
    );
}
export default Authorization;

/*
    { user.id ? children : <LoginView/> }
*/