import CircleButton from '../../components/CircleButton/CircleButton';
import Header from '../../components/Header/Header.jsx';
import './RegistrerView.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import { Link } from 'react-router-dom';
import back from '../../assets/icons/back_icon.jpg';

function RegistrerView() {
    //----------States:----------
 
    //----------Handlers:----------

    return (
        <>
            <Header></Header>
            <main className='registrerContainer'>
                <section>
                    <h1>¿Eres nuevo? ¡Únete a nuestra comunidad!</h1>
                    <p>
                        Completa nuestro formulario de registro y 
                        participa con más personas en esta gran
                        comunidad.
                    </p>
                    <ul>
                        <li>Connecta con más  personas</li>
                        <li>Comparte los mismos intereses</li>
                        <li>Haz amigos</li>
                    </ul>
                </section>
                <section>
                    <h1>Completa tus datos:</h1>
                    <ProfileCard />
                </section>
            </main>
        </>
    );
}
export default RegistrerView;