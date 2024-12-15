import './ButtonsHeaderOut.css';
import { Link } from 'react-router-dom';

function ButtonsHeaderOut() {
    return(
        <nav className='nv'>
            <ul className='lst'>
                <li className='h-li'>
                    <Link to={"/"} className='li-link'>
                        INICIO
                    </Link>
                </li>
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
    );
}

export default ButtonsHeaderOut;