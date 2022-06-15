import './PrincipalView.css';
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useState } from 'react';
import { getUsers } from '../../tools/controlers.mjs';
import { URL } from '../../tools/defines.mjs';

function PrincipalView () {
    const [ users, setUSers ] = useState([]);
    //----------Handlers----------
    
    async function loadUsers () {
        const a = await getUsers(URL);
        setUSers(a);
        //setUSers(JSON.stringify(getUsers(URL)));
        console.log(a)
    }
    return(
        <>
            <h1>This is a Principal view</h1>
            <div className="principalContainer">
                <button onClick={loadUsers}>Carga usuarios</button>
                {users.map(
                    (user)=><ProfileCard user={user} editable="false"/>
                )}
            </div>
        </>
    );
}
export default PrincipalView;