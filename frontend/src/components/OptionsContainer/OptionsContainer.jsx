import CircleButton from '../CircleButton/CircleButton';
import './OptionsContainer.css';

function OptionsContainer () {
    return(
        <div className='optionsContainer'>
            <p>this is a component</p>
            <CircleButton/>
            <button>Opcion 1</button>
            <button>Opcion 2</button>
        </div>
    );
}
export default OptionsContainer;