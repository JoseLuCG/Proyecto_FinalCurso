import { useState } from 'react';
import { Link } from 'react-router-dom';
import { changeValueFactory } from '../../tools/apptools.mjs';
import { logingUser } from '../../tools/controlers.mjs';
import './StartView.css';

function StartView () {
    //States:
    const [ userInfo , setUserInfo ] = useState("");
    const [ password, setPassword ] = useState("");

    //Handlers:
    const userInfoChangeHandler = changeValueFactory(setUserInfo);
    const passwordChangeHandler = changeValueFactory(setPassword);
    
    async function sendLogin() {
        const user = {
            password,
            userInfo
        }
        response = await logingUser;
    }
    //
    return (
        <div className='logingContainer'>
            <h1>Start view</h1>
            <img className='LogoApp' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtepaT1fXQVI9_pyOM34JaAx7aASFWzfmyQg&usqp=CAU" alt="Logo imagen" />
            <input onChange={userInfoChangeHandler} type="text" placeholder='Nombre de usuario o email' />
            <input onChange={passwordChangeHandler} type="password" placeholder='Contraseña' />
            <div>
                <Link to={"/profiles/"}>
                    <button onClick={sendLogin}>Entrar</button>
                </Link>
                <Link to={"/sing-up/"}>
                    <button>Registrarse</button>
                </Link>
            </div>
        </div>
    );
}
export default StartView;