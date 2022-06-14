import './PrincipalView.css';
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useState } from 'react';

function PrincipalView () {
    const [ users, setUSers ] = useState([]);
    return(
        <>
            <h1>This is a Principal view</h1>
            <div className="principalContainer">
                {users}
            </div>
        </>
    );
}
export default PrincipalView;