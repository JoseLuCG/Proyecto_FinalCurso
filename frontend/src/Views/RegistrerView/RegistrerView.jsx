import { useEffect, useState, useContext } from 'react';
import { Context } from '../../storage/SharedStorage.jsx';
import { changeValueFactory } from '../../tools/apptools.mjs';
import CircleButton from '../../components/CircleButton/CircleButton';
import SaveButton from '../../components/SaveButton/SaveButton';
import './RegistrerView.css';

function RegistrerView() {
    //----------States:----------
    const [ store, setStore ] = useContext(Context);
    
    const [ nameProfile, setNameProfile ] = useState("");
    const [ nameUser, setNameUser ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ interest, setInterest ] = useState([]);
    const [ age , setAge ] = useState (0);
    const [ description, setDescription ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ photo, setPhoto ] = useState("");
    
    //----------Handlers:----------

    const nameProfileChangeHandler = changeValueFactory(setNameProfile);
    const nameChangeHandler = changeValueFactory(setNameUser);
    const passwordChangeHandler = changeValueFactory(setPassword);
    const locationChangeHandler = changeValueFactory(setLocation);
    const interestChangeHandler = changeValueFactory(setInterest);
    const ageChangeHandler = changeValueFactory(setAge);
    const descriptionChangeHandler = changeValueFactory(setDescription);
    const emailChangeHandler = changeValueFactory(setEmail);
    const photoChangeHandler = changeValueFactory(setPhoto);

    //----------UseEfects:----------

    //----------Functions:----------
    
    return(
        <div className='registrerContainer'>
            <h1>This is the RegistrerView</h1>
            <CircleButton/>
            <label> 
                Nombre de perfil
                <input onChange={nameProfileChangeHandler} id="nameProfile" type="text"/>
            </label>
            <label>
                Nombre
                <input onChange={nameChangeHandler} id="nameUser" type="text"/>
            </label>
            <label>
                Contraseña
                <input onChange={passwordChangeHandler} type="password" />
            </label>
            <label>
                Ciudad
                <input onChange={locationChangeHandler} type="text"/>
            </label>
            <label>
                Intereses
                <input onChange={interestChangeHandler} type="text"/>
            </label>
            <label>
                Edad
                <input onChange={ageChangeHandler} type="text"/>
            </label>
            <label>
                Descripción
                <input onChange={descriptionChangeHandler} type="text"/>
            </label>
            <label>
                Correo electrónico
                <input onChange={emailChangeHandler} type="text"/>
            </label>
            <label>
                Foto
                <input onChange={photoChangeHandler} type="text"/>
            </label>
            <SaveButton/>
        </div>
    );
}
export default RegistrerView;