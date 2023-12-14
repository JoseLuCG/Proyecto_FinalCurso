import { useState } from 'react';
import './SliderMenu.css';

function SliderMenu () {
    // ---------- States ----------
    const [deploy, setDeploy] = useState(false);
    
    // ---------- Handlers ----------
    function handlerMenuState(){
        setDeploy(!deploy);
    }

    return(
        <div className='wrapper'>
            <button className='menuButton' onClick={handlerMenuState}>
               Menu
            </button>
            <ul className='menuList' hidden={deploy && "hidden"}>
                <li className='menuItem'>
                    <button>Opciones</button>
                </li>
                <li className='menuItem'>
                    <button>Perfil</button>
                </li>
            </ul>
        </div>
    );
}
export default SliderMenu;
//https://voskan.host/2023/03/31/how-to-build-a-slider-menu-with-react-js/