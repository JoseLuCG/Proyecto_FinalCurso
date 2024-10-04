import CircleButton from '../CircleButton/CircleButton';
import './OptionsContainer.css';
import back from '../../assets/icons/back_icon.jpg';
import { Link } from 'react-router-dom';


function OptionsContainer () {
    return(
        <div className='optionsContainer'>
            <p>this is a component</p>
            <CircleButton imgSrc={back} path={-1}/>
            <Link to={'/edit-user/'}>
            <button>Perfil</button>
            </Link>
            <button>Opciones</button>
        </div>
    );
}
export default OptionsContainer;