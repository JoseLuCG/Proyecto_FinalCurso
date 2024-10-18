import './PrincipalView.css';
import Header from '../../components/Header/Header';
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useState, useContext } from 'react';
import { getUsers, getInterests } from '../../tools/connectors/conections.mjs';
import { URL } from '../../tools/defines.mjs';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import op_icon from '../../assets/icons/options_icon.jpg';
import fil_icon from '../../assets/icons/filtrer_icon.jpg';
import { Users } from '../../services/UsersStorage';

function PrincipalView () {
    const [ users, setUsers ] = useContext(Users);

    // ---------- Functions ----------
    async function loadUserData() {
        const backendUsers = await getUsers(URL);
        const backendInterest = await getInterests(URL);

        
        
        
    }

    // ---------- Handlers ----------
    
    async function loadUsersHandler () {
        loadUserData();
        const backendUsers = await getUsers(URL);
        setUsers(backendUsers);
    }

    return(
        <>
            <Header></Header>
            <main className="mn-bd">
                <NavigationBar pathL={'/settings/'} pathR={'/filter/'} imgL={op_icon} imgR={fil_icon}/>
                <button className='buttonUsersLoader' onClick={loadUsersHandler}>Carga usuarios</button>
                <div className='usersContainer'>
                    {users.map(
                        (user) => <ProfileCard key={user._id} user={user} editable="false" />
                    )}
                </div>
            </main>
        </>
    );
}
export default PrincipalView;