import { useState } from 'react';
import './SliderMenu.css';
import settings from '../../assets/icons/settings.png';
import CircleButton from '../CircleButton/CircleButton';
import op_icon from '../../assets/icons/options_icon.jpg';


function SliderMenu () {
    // ---------- States ----------
    const [deploy, setDeploy] = useState(true);
    
    // ---------- Handlers ----------
    function handlerMenuState(){
        setDeploy(!deploy);
    }

    return(
        <div className='wrapper'>
            <button className='menuButton' onClick={handlerMenuState}>
               
            </button>
            <ul className='menuList' hidden={deploy && "hidden"}>
                <li className='menuItem'>
                    <button>Opciones</button>
                </li>
                <li className='menuItem'>
                    <CircleButton imgSrc={settings} path={'/edit-user/'}/>
                    Perfil
                </li>
            </ul>
        </div>
    );
}
export default SliderMenu;
//https://voskan.host/2023/03/31/how-to-build-a-slider-menu-with-react-js/