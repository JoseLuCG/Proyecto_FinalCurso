import './Card.css';
import bloomlyLogo from '../../assets/Bloomly_logo.png';
import { Link } from 'react-router-dom';

function Card() {
    return (
        <div class="container">
            <img src={bloomlyLogo} alt="Bloomly Logo" class="logo" />
            <h1>Bienvenido a Bloomly</h1>
            <p>Conecta, comparte y florece con personas afines.</p>
            <button class="btn" onclick="location.href='registro.html'">Registrarse</button>
            <button class="btn" onclick="location.href='login.html'">Iniciar sesión</button>
        </div>
    );
}

export default Card;