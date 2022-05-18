import { useState } from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import SaveButton from '../../components/SaveButton/SaveButton';
import './RegistrerView.css';

function RegistrerView() {
    //States:
    const [ nameProfile, setNameProfile ] = useState("");
    const [ nameUser, setNameUser ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ interest, setInterest ] = useState([]);
    const [ age , setAge ] = useState (0);
    const [ description, setDescription ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ photo, setPhoto ] = useState("");

    
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