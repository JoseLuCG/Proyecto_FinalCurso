import { useEffect, useState, useContext, useRef } from 'react';
import { Context } from '../../storage/SharedStorage.jsx';
import { changeValueFactory } from '../../tools/apptools.mjs';
import { registrerUser } from '../../tools/controlers.mjs';
import PicIcon from "../PicIcon/PicIcon";
import styles from './ProfileCard.module.css';


function ProfileCard ({user}) {
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
        const editable = useRef(true)
        
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
    
        useEffect(
            ()=>{
                registrerUser(store);
            },
            [store]
        )

        //----------Functions:----------
        /**
         * This function save the data of states in the context.
         */
        function saveData () {
            const newStore = {...store};
            newStore.nameProfile = nameProfile;
            newStore.nameUser = nameUser;
            newStore.password = password;
            newStore.location = location;
            newStore.interest = interest.split(",").map(
                tag => tag.trim(" ").toLowerCase()
            );
            newStore.age = age;
            newStore.description = description;
            newStore.email = email;
            newStore.photo = photo;
            setStore(newStore);
        }


    return (
        <div className={styles.profileContainer}>
            <div className="containerPhoto">
                <PicIcon img="https://s.ws.pho.to/img/index/ai/source.jpg" />
                <input value={user && user.age} onChange={ageChangeHandler} id="age" type="number" placeholder="Edad"/>
            </div>
            <div>
                <input value={user && user.nameProfile} onChange={nameProfileChangeHandler} id="nameProfile" type="text" placeholder="Nombre de perfil"/>
                <input value={user && user.nameUser} onChange={nameChangeHandler} id="name" type="text" placeholder="Nombre" />
                <input value={user && user.location} onChange={locationChangeHandler} id="location" type="text" placeholder="Ciudad" />
                <input value={user && user.interest} onChange={interestChangeHandler} id="interests" type="text" placeholder="Intereses" />
            </div>
                <textarea value={user && user.description} onChange={descriptionChangeHandler} name="description" id="description" cols="" rows="" placeholder="Descripción"></textarea>
            <div /*hidden*/>
                <input onChange={passwordChangeHandler} id="password" type="password" placeholder="Contraseña" />
                <input onChange={emailChangeHandler} id="email" type="text" placeholder="Correo" />
                <button id='saveButton' onClick={saveData}>Save</button>
            </div>
        </div>
    );
}
export default ProfileCard;