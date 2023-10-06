import { Context } from "./SharedStorage";
import { useContext } from "react";
import Login from "../components/Login/Login.jsx";

function Authorization ({children}) {
    //----------States----------
    //In mongodb the id will be _id. In SQLite is 'id'.
    const [ store ] = useContext(Context);

    return(
        <>
        { store.id ? children : <Login/> }
        </>
    );
}
export default Authorization;