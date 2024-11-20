import { OwnUser } from "./OwnUserStorage.jsx";
import { useContext } from "react";
import LoginView from "../Views/LoginView/LoginView.jsx";

function Authorization ({children}) {
    //----------States----------
    //In mongodb the id will be _id. In SQLite is 'id'.
    const [ user ] = useContext(OwnUser);

    return(
        <>
        { user.id ? children : <LoginView/> }
        </>
    );
}
export default Authorization;