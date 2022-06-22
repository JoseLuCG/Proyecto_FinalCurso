import { Context } from "./SharedStorage";
import { useContext } from "react";
import Login from "../components/Login/Login.jsx";
import { useEffect } from "react";

function Authorization ({children}) {
    //----------States----------
    const [ store ] = useContext(Context);

    useEffect(
        ()=>{
            console.log("Este es el store:",store);
        },
        [store]
    );
    return(
        <>
        { store.id ? children : <Login/> }
        </>
    );
}
export default Authorization;