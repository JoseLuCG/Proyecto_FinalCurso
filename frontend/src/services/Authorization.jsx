import { Context } from "./SharedStorage";
import { useContext } from "react";
import Login from "../components/Login/Login.jsx";
import { useEffect } from "react";

function Authorization ({children}) {
    //----------States----------
    const [ store ] = useContext(Context);

    return(
        <>
        { store._id ? children : <Login/> }
        </>
    );
}
export default Authorization;