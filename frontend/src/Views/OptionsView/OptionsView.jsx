import "./OptionsView.css";
import Header from "../../components/Header/Header";

function OptionsView() {
    return(
        <>
            <Header/>
            <main className="o-mn-cntnr">
                <section className="o-ctnr">
                    <h1>Esta es la página de opciones</h1>
                    <div className="slctr-cntnr">
                        <ul>
                            <li>Cambiar Tema</li>
                            <li>Bloquear contacto</li>
                            <li>Seleccionar color</li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
}

export default OptionsView;