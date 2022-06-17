import { Context } from "./SharedStorage";

function Authorization ({children}) {
    //----------States----------
    const [ store ] = useContext(Context);

    return(
        <div id="Authorization">
            {}
        </div>
    );
}