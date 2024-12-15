import './HomeView.css';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

function HomeView() {
    // TODO: Change the styles of the buttons of this page
    return(
        <>
            <Header/>
            <main className='mn-cntnr'>
                <section className='stSection'>
                    <h1>¡Bienvenido a Bloomly!</h1>
                    <p>
                        A veces solo se necesita una buena convesación
                        para que el día mejore. ¿No sabes con quien hablar?
                        ¡Regístrate o inicia sesión! Podrás hablar con muchas
                        personas con las que compartiras aficiones, intereses,
                        ¿y por qué no?, que estén cerca de tí.
                    </p>
                </section>
                <section className='ndSection'>
                    <section className='ndS-left'>
                        <div className='l-dv'>
                            <h2>¿Eres nuevo? ¡Regístrate!</h2>
                            <Link to={"/sing-up/"}>
                                <button>Registro</button>
                            </Link>
                        </div>
                    </section>
                    <section className='ndS-right'>
                        <div className='r-dv'>
                            <h2>¿Tienes una cuenta? ¡Inicia sesión!</h2>
                            <Link to={"/login"}>
                                <button>Inicio Sesión</button>
                            </Link>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}

export default HomeView;