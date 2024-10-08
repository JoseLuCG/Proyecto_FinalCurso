import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    //----------States:----------
 
    //----------Handlers:----------
    return (
        <header className='h-bd'>
            <aside className='lg-ctnr'>
                <div className='img-ctnr'>
                </div>
                <h1 className='appname'>BLOOMLY</h1>
            </aside>
            <section className='sctn-ctnr'>
                <nav className='nv'>
                    <ul className='lst'>
                        <li className='h-li'>
                            <Link to={"/about/"} className='li-link'>
                                SOBRE BLOOMLY
                            </Link>
                        </li>
                        <li className='h-li'>SUGERENCIAS</li>
                        <li className='h-li'>OPCION 3</li>
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