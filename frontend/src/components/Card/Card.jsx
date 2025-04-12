import './Card.css';
import bloomlyLogo from '../../assets/Bloomly_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect, useRef } from 'react';
import { OwnUser } from '../../services/OwnUserStorage';
import { logingUser } from '../../tools/connectors/conections.mjs';
import { messsage } from '../../tools/defines.mjs';

function Card({ isHomeView, setIsHomeView }) {
    // States:
    const [ ownUser, setOwnUser ] = useContext(OwnUser);
    const [ user, setUser ] = useState({
        emailOrProfile: "",
        password: ""
    });
    const prevUserRef = useRef(user);
    const navigate = useNavigate();

    //Handlers:
    function setIsHomeViewHandler() {
        setIsHomeView(false);
    }

    function setUserHandler(event) {
        const { name, value } = event.target;

        setUser(previousState => ({
            ...previousState,
            [name]: value
        }));
    }

    function setLocalSotore() {
        localStorage.setItem("User", JSON.stringify(user));
    }
    
    async function sendLogin(event) {
        try {
            event.preventDefault();
            const response = await logingUser(user);
            setUser(response);
            setLocalSotore();
            navigate("/profiles/");
            window.location.reload();
        } catch (error) {
            alert(messsage.sessionError)
        }
    }

    function navigateToSingUp () {
        navigate("/sing-up/");
    }

    useEffect(() => {
        if ((prevUserRef.current !== user) && user.id) {
            setLocalSotore();
            prevUserRef.current = user;
        }
    },[user]
    );

    return (
        <>
            {
                isHomeView ?
                    <div class="container">
                        <img src={bloomlyLogo} alt="Bloomly Logo" class="logo" />
                        <h1>Bienvenido a Bloomly</h1>
                        <p>Conecta, comparte y florece con personas afines.</p>
                        <button class="btn" onClick={navigateToSingUp}>Registrarse</button>
                        <button class="btn" onClick={setIsHomeViewHandler}>Iniciar sesión</button>
                    </div>
                    :
                    <div class="form-container">
                        <h2>Iniciar sesión</h2>
                        <form action={setIsHomeView} onSubmit={sendLogin}>
                            <input 
                            type="text" 
                            placeholder="Correo electrónico o nombre de perfil"
                            name="emailOrProfile"
                            value={user.emailOrProfile}
                            required
                            onChange={setUserHandler}/>
                            <input 
                            type="password" 
                            placeholder="Contraseña"
                            name="password"
                            value={user.password}
                            required
                            onChange={setUserHandler}/>
                            <input type="submit" value="Entrar"/>
                        </form>
                        <div class="extra">
                            ¿No tienes cuenta? <Link to={"/sing-up/"}>Regístrate aquí</Link>
                        </div>
                    </div>
            }
        </>
    );
}

export default Card;