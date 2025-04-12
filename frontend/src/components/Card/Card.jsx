import './Card.css';
import bloomlyLogo from '../../assets/Bloomly_logo.png';
import { Link } from 'react-router-dom';

function Card({ isHomeView, setIsHomeView }) {
    // States:
    

    function setIsHomeViewHandler() {
        setIsHomeView(false);
    }
    return (
        <>
            {
                isHomeView ?
                    <div class="container">
                        <img src={bloomlyLogo} alt="Bloomly Logo" class="logo" />
                        <h1>Bienvenido a Bloomly</h1>
                        <p>Conecta, comparte y florece con personas afines.</p>
                        <button class="btn" onclick="{}">Registrarse</button>
                        <button class="btn" onClick={setIsHomeViewHandler}>Iniciar sesión</button>
                    </div>
                    :
                    <div class="form-container">
                        <h2>Iniciar sesión</h2>
                        <form action={setIsHomeView} method="POST">
                            <input type="email" name="email" placeholder="Correo electrónico" required/>
                            <input type="password" name="password" placeholder="Contraseña" required/>
                            <input type="submit" value="Entrar"/>
                        </form>
                        <div class="extra">
                            ¿No tienes cuenta? <a href="registro.html">Regístrate aquí</a>
                        </div>
                    </div>
            }
        </>
    );
}

export default Card;