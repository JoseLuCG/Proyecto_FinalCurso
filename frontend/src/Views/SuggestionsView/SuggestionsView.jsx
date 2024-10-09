import './SuggestionsView.css';
import Header from '../../components/Header/Header';

function SuggestionsView() {
    
    return(
        <>
            <Header></Header>
            <main className='mn-cont'>
                <section className='cont-form'>
                    <h2>Envía tu sugerencia</h2>
                    <form action="">
                        <fieldset>
                            <legend>Datos personales</legend>
                            <p>
                                <label htmlFor="name">Nombre: </label>
                                <input type="text" id='name' />
                            </p>
                            <p>
                                <label htmlFor="surname">Apellidos: </label>
                                <input type="text" id="surname" />
                            </p>
                            <p>
                                <label htmlFor="phone">Teléfono: </label>
                                <input type="text" id="phone" />
                            </p>
                            <p>
                                <label htmlFor="email">Correo electrónico: </label>
                                <input type="email" id="email" />
                            </p>
                            <p>
                            <label htmlFor="message">Escribe tu sugerencia: </label><br />
                            <textarea name="" id="message" cols="40" rows="5"></textarea>
                            </p>
                        </fieldset>
                        <button type='submit'>Enviar sugerencia</button>
                        <button type='reset'>Borrar formulario</button>
                    </form>
                </section>
            </main>
        </>
    );
}

export default SuggestionsView;