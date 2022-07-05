import { useNavigate } from 'react-router-dom';
import './CircleButton.css';
/*
El icono del boton lo pasa el padre,
la acción tambien la pasa el padre:
    *Para el back usaremos:
        - https://bobbyhadz.com/blog/react-router-go-back-to-previous-page
*/

function CircleButton ({imgSrc, path}) {
    const navigate = useNavigate()

   function go () {
    navigate(path)
   }
    return(
        <button id='circleButton' onClick={go}>
            <img src={imgSrc}/>
        </button>
    );
}
export default CircleButton;