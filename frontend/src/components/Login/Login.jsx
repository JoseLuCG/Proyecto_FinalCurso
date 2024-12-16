import { useState,useContext, useEffect, useRef } from 'react';
import { OwnUser } from '../../services/OwnUserStorage.jsx';
import { Link } from 'react-router-dom';
import { changeValueFactory } from '../../tools/apptools.mjs';
import { logingUser } from '../../tools/connectors/conections.mjs';
import './Login.css';
import { messsage } from '../../tools/defines.mjs';

function Login () {
    //States:
    const [ user, setUser ] = useContext(OwnUser);

    const [ userData , setuserData ] = useState("");
    const [ password, setPassword ] = useState("");
    const prevUserRef = useRef(user);

    //Handlers:
    const userDataChangeHandler = changeValueFactory(setuserData);
    const passwordChangeHandler = changeValueFactory(setPassword);

    function setLocalSotore() {
        localStorage.setItem("User", JSON.stringify(user));
    }
    
    async function sendLogin() {
        const user = {
            password,
            userData
        }

        try {
            const response = await logingUser(user);
            setUser(response);
            setLocalSotore();
            window.location.reload();
        } catch (error) {
            alert(messsage.sessionError)
        }
    }
    
    useEffect(() => {
        if ((prevUserRef.current !== user) && user.id) {
            setLocalSotore();
            prevUserRef.current = user;
        }
    },[user]
    );

    return (
        <main className='log-cont'>
            <img className='LogoApp' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtepaT1fXQVI9_pyOM34JaAx7aASFWzfmyQg&usqp=CAU" alt="Logo imagen" />
            <div className='imputContainer'>
            <input className='dataImput' onChange={userDataChangeHandler} type="text" placeholder='Nombre de usuario o email' />
            <input className='dataImput' onChange={passwordChangeHandler} type="password" placeholder='Contraseña' />
            </div>
            <div className='buttonsStar'>
                <Link to={"/profiles/"}>
                    <button className='logButton' onClick={sendLogin}>Entrar</button>
                </Link>
                <Link to={"/sing-up/"}>
                    <button className='logButton' >Registrarse</button>
                </Link>
            </div>
        </main>
    );
}
export default Login;