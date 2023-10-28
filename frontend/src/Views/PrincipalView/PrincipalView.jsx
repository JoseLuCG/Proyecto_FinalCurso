import './PrincipalView.css';
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useState } from 'react';
import { getUsers } from '../../tools/controlers.mjs';
import { URL } from '../../tools/defines.mjs';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import op_icon from '../../iconos_app/options_icon.jpg';
import fil_icon from '../../iconos_app/filtrer_icon.jpg';

function PrincipalView () {
    const [ users, setUSers ] = useState([]);
    //----------Handlers----------
    
    async function loadUsers () {
        const a = await getUsers(URL);
        setUSers(a);
    }

    return(
        <>
            <NavigationBar pathL={'/settings/'} pathR={'/filter/'} imgL={op_icon} imgR={fil_icon}/>
            <div className="principalContainer">
                <button className='buttonUsersLoader' onClick={loadUsers}>Carga usuarios</button>
                <div className='usersContainer'>
                    {users.map(
                        (user) => <ProfileCard key={user._id} user={user} editable="false" />
                    )}
                </div>
            </div>
        </>
    );
}
export default PrincipalView;