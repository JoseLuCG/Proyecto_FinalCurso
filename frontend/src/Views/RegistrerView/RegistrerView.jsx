import CircleButton from '../../components/CircleButton/CircleButton';
import SaveButton from '../../components/SaveButton/SaveButton';
import './RegistrerView.css';

function RegistrerView() {
    return(
        <div className='registrerContainer'>
            <h1>This is the RegistrerView</h1>
            <CircleButton/>
            <label> 
                Nombre de perfil
                <input id="nameProfile" type="text"/>
            </label>
            <label>
                Nombre
                <input id="nameUser" type="text"/>
            </label>
            <label>
                Contraseña
                <input type="password" />
            </label>
            <label>
                Ciudad
                <input type="text"/>
            </label>
            <label>
                Intereses
                <input type="text"/>
            </label>
            <label>
                Edad
                <input type="text"/>
            </label>
            <label>
                Descripción
                <input type="text"/>
            </label>
            <label>
                Correo electrónico
                <input type="text"/>
            </label>
            <label>
                Foto
                <input type="text"/>
            </label>
            <SaveButton/>
        </div>
    );
}
export default RegistrerView;