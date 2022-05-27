import { useEffect, useState, useContext, useRef } from 'react';
import { Context } from '../../storage/SharedStorage.jsx';
import { changeValueFactory } from '../../tools/apptools.mjs';
import PicIcon from "../PicIcon/PicIcon";
import styles from './ProfileCard.module.css';


function ProfileCard () {
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
    
        //----------Functions:----------
        function saveData () {
            const newStore = {...store};
            newStore.nameProfile = nameProfile;
            newStore.nameUser = nameUser;
            newStore.password = password;
            newStore.location = location;
            newStore.interest = interest;
            newStore.age = age;
            newStore.description = description;
            newStore.email = email;
            newStore.photo = photo;
            setStore(newStore);
        }
    
    return (
        <div className={styles.profileContainer}>
            <div className="containerPhoto">
                <PicIcon img="https://s.ws.pho.to/img/index/ai/source.jpg"/>
                <input id="nameProfile" type="text" placeholder="Edad"/>
            </div>
            <div>
                <input id="nameProfile" type="text" placeholder="Nombre de perfil"/>
                <input id="nameProfile" type="text" placeholder="Nombre"/>
                <input id="nameProfile" type="text" placeholder="Ciudad"/>
                <input id="nameProfile" type="text" placeholder="Intereses"/>
            </div>
            <textarea name="description" id="description" cols="30" rows="10" placeholder="Descripción"></textarea>
        </div>
    );
}
export default ProfileCard;