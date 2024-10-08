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
                        <li className='h-li'>
                            <Link to={"/suggestions/"} className='li-link'>
                                SUGERENCIAS
                            </Link>
                        </li>
                        <li className='h-li'>
                            <Link to={"/rules-of-conduct/"} className='li-link'>
                                NORMAS
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <div className='circle-logButton'>
                        <button className='crcl-l'>
                            <Link to={"/"} className='li-link'>
                                I S
                            </Link>
                        </button>
                        <button className='crcl-r'>R T</button>
                    </div>
                </div>
            </section>
        </header>
    );
}
export default Header;