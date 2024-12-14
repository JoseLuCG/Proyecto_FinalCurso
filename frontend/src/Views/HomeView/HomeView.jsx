import Header from '../../components/Header/Header';
import './HomeView.css';

function HomeView() {
    return(
        <>
            <Header/>
            <main className='mn-cntnr'>
                <section className='stSection'>
                    <h1>¡Bienvenido a Bloomly!</h1>
                </section>
                <section className='ndSection'>
                    <section>
                        <h2>¿Eres nuevo? ¡Regístrate!</h2>
                    </section>
                    <section>
                        <h2>¿Tienes una cuenta? ¡Inicia sesión!</h2>
                    </section>
                </section>
            </main>
        </>
    );
}

export default HomeView;