import CircleButton from '../CircleButton/CircleButton';
import './OptionsContainer.css';
import back from '../../iconos_app/back_icon.jpg'

function OptionsContainer () {
    return(
        <div className='optionsContainer'>
            <p>this is a component</p>
            <CircleButton imgSrc={back} path/>
            <button>Perfil</button>
            <button>Opciones</button>
        </div>
    );
}
export default OptionsContainer;