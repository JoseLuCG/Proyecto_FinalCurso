import { Context } from "./SharedStorage";

import Login from "../components/Login/Login.jsx";

function Authorization ({children}) {
    //----------States----------
    const [ store ] = useContext(Context);

    return(
        <>
        { store.id ? children : <Login/> }
        </>
    );
}