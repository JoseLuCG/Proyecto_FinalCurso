import { useState } from 'react';
import './SliderMenu.css';
import settings from '../../assets/icons/settings.png';
import prfileOptions from '../../assets/icons/user.png';
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
        <div className='wpr'>
            <button className='mn-btn' onClick={handlerMenuState}></button>
            
            {/* ----- Hidden content ----- */}
            <nav className='nv-cnt' hidden={deploy && "hidden"}>
                <ul className='nv-ul'>
                    <li className='mn-itm'>
                        <CircleButton imgSrc={settings}/>
                        Opciones
                    </li>
                    <li className='mn-itm'>
                        <CircleButton imgSrc={prfileOptions} path={'/edit-user/'}/>
                        Perfil
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default SliderMenu;
//https://voskan.host/2023/03/31/how-to-build-a-slider-menu-with-react-js/