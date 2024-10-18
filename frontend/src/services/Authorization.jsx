import { OwnUser } from "./OwnUserStorage.jsx";
import { useContext } from "react";
import Login from "../components/Login/Login.jsx";

function Authorization ({children}) {
    //----------States----------
    //In mongodb the id will be _id. In SQLite is 'id'.
    const [ user ] = useContext(OwnUser);

    return(
        <>
        { user.id ? children : <Login/> }
        </>
    );
}
export default Authorization;