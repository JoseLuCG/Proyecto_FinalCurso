import './ButtonsHeaderIn.css';
import { Link } from 'react-router-dom';

function ButtonsHeaderIn() {
    return(
        <nav className='nv'>
            <ul className='lst'>
                <li className='h-li'>
                    <Link to={"/profiles/"} className='li-link'>
                        PAGINA PRINCIPAL
                    </Link>
                </li>
                <li className='h-li'>
                    <Link to={"/options/"} className='li-link'>
                        OPCIONES
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default ButtonsHeaderIn;