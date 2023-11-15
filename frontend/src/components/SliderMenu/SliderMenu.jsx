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
               o
            </button>
            <ul className='menuList' deploy={deploy}>
                <li className='menuItem'>Opciones</li>
                <li className='menuItem'>Perfil</li>
            </ul>
        </div>
    );
}
export default SliderMenu;