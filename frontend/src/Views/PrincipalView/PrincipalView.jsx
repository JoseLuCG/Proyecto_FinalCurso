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
        
        for (let user of backendUsers) {
            // For each user fetch the interesets:
            for (let interest of backendInterest) {
                if(user.id == interest.idUser) {
                    if (user.interest) {
                        user.interest.push(interest.nameInterest);
                    } else {
                        user.interest = [interest.nameInterest];
                    }
                }
            }
        }
        return backendUsers;
    }

    // ---------- Handlers ----------
    // TODO: Implement `socket.io-client` for manage the connection of the users
    async function loadUsersHandler () {
        const backendUsers = await loadUserData();
        setUsers(backendUsers);
    }
    
    return(
        <>
            <Header></Header>
            <main className="mn-bd">
                <NavigationBar pathL={'/settings/'} pathR={'/filter/'} imgL={op_icon} imgR={fil_icon}/>
                <button className='buttonUsersLoader' onClick={loadUsersHandler}>Carga usuarios</button>
                <div className='usersContainer'>
                    {
                        users.map(
                            (user) => <ProfileCard key={user._id} user={user} editable="false" />
                        )
                    }
                </div>
            </main>
        </>
    );
}
export default PrincipalView;