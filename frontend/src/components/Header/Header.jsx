import './Header.css';

function Header() {
    //----------States:----------
 
    //----------Handlers:----------
    return (
        <header className='h-bd'>
            <aside className='lg-ctnr'>
                <img src="" alt="Logo"/>
            </aside>
            <section className='sctn-ctnr'>
                <nav className='nv'>
                    <ul className='lst'>
                        <li className='h-li'>opcion 1</li>
                        <li className='h-li'>opcion 2</li>
                        <li className='h-li'>opcion 3</li>
                    </ul>
                </nav>
                <div>
                        <button>Iniciar sesión</button>
                        <button>Registrarse</button>
                    </div>
            </section>
        </header>
    );
}
export default Header;