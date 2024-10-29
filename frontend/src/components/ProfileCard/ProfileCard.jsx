import { useState, useContext, useEffect, useRef } from 'react';
import { OwnUser } from '../../services/OwnUserStorage.jsx';
import { changeValueFactory } from '../../tools/apptools.mjs';
import { postUser } from '../../tools/connectors/conections.mjs';
import PicIcon from "../PicIcon/PicIcon";
import styles from './ProfileCard.module.css';
import InterestItem from '../InterestItem/InterestItem.jsx';
import MessageContainer from '../MessageContainer/MessageContainer.jsx';


function ProfileCard ({user, editable}) {
    //----------States:----------
    const [ ownUser, setOwnUser ] = useContext(OwnUser);

    const [ userForm, setUserForm ] = useState({
      nameProfile: "",
      nameUser: "",
      password: "",
      location: "",
      interest: "", // TODO: funcion que retorne un array
      age: 0,
      description: "",
      email: "",
    });
    // https://search.brave.com/search?q=manejo+de+useState+con+objetos&source=desktop&summary=1&summary_og=116d200a65c72bad55c100

    /*
    const [ nameProfile, setNameProfile ] = useState("");
    const [ nameUser, setNameUser ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ interest, setInterest ] = useState("");
    const [ age , setAge ] = useState (0);
    const [ description, setDescription ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ photo, setPhoto ] = useState("");
    */

    const [ showInterests, setShowInterests] = useState(true);
    const [ hiddeMessages, setHiddeMessages ] = useState(false);

    const prevUserRef = useRef(ownUser);

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

    //----------Functions:----------
    
    /**
     * Builds a user that will be introduced in the context.
     */
    function userBuilder() {
        let user = {...ownUser};
        
        user = {
            nameProfile : nameProfile,
            nameUser : nameUser,
            location : location,
            interest : interest.split(",").map(
                    (tag) => {
                        return tag.trim(" ").toLowerCase();
                    }),
            password : password,
            age : age,
            description : description,
            email : email,
            photo :  photo
        };

        if (!user.interest) {
            user.interest = [""];
        } else {
            
        }

        return user;
    }
    
    function checkSendData(user) {
      let counter = 0;

      if (user.nameProfile != "") counter++;
      if (user.email != "") counter ++;
      
      if (counter == 2) {
        //console.log(user);
        return true;
      }

      return false;
    }
    

    function loadInterests () {
        if (showInterests) setShowInterests(false);    
        else setShowInterests(true);
    }

    function showMessagesHandler() {
      if (!hiddeMessages) {
        setHiddeMessages(true);
      } else {
        setHiddeMessages(false);
      }
    }

    /**
     * 
     * @param {*} event 
     */
    function handleSubmit (event) {   
      const user = userBuilder();

      event.preventDefault();
      if (checkSendData(user)) {
        setOwnUser(user);
      }
    }

    async function sendData() {
        const response = await postUser(ownUser);
        console.log("Datos enviados:",ownUser);
        
    }

    useEffect(() => {
      if (prevUserRef.current !== ownUser) {
        sendData();
        prevUserRef.current = ownUser;
      }
    });
    
    return (
        <form className={styles.profileContainer} onSubmit={handleSubmit}>
             <div className={styles.containerPhotoAge}>
                <PicIcon img="https://s.ws.pho.to/img/index/ai/source.jpg" />
                <input 
                  disabled={editable && "disabled"} 
                  value={user && user.age} 
                  onChange={ageChangeHandler} 
                  className={[styles.age, styles.inputData].join(' ')} 
                  type="number" 
                  placeholder="Edad" 
                  min="10" 
                  max="100"
                />
            </div>
            <div className={styles.dataInputs}>
                <input 
                  disabled={editable && "disabled"} 
                  value={user && user.nameProfile} 
                  onChange={nameProfileChangeHandler} 
                  className={styles.inputData} 
                  type="text" 
                  placeholder="Nombre de perfil" 
                />
                <input 
                  disabled={editable && "disabled"} 
                  value={user && user.nameUser} 
                  onChange={nameChangeHandler} 
                  className={styles.inputData} 
                  type="text" 
                  placeholder="Nombre" 
                />
                <input 
                  disabled={editable && "disabled"} 
                  value={user && user.location} 
                  onChange={locationChangeHandler} 
                  className={styles.inputData} 
                  type="text" 
                  placeholder="Ciudad" 
                />
                <input 
                  disabled={editable && "disabled"}
                  hidden={editable && "hidden"} 
                  onChange={interestChangeHandler} 
                  className={styles.inputData}
                  type="text"
                  placeholder="Intereses" 
                />
                <button 
                  className={styles.deployInterestsButton} 
                  onClick={loadInterests}
                >
                    display interests
                </button>
                <div 
                  className={styles.interestsContainer} 
                  hidden={showInterests && "hidden"}
                >
                    <ul>
                        {
                          user? 
                            user.interest.map(
                              (interest) => { return (<InterestItem interest={interest}/>)}
                              )
                              : "None"
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.textareaDescription}>
            <textarea disabled={editable && "disabled"} value={user && user.description} onChange={descriptionChangeHandler} name="description" className={styles.description} cols="20" rows="6" placeholder="Descripción"></textarea>
            <button className={styles.messageButton} onClick={showMessagesHandler}>Mensaje</button>
            <MessageContainer hiddeMessages={hiddeMessages} idUser={user.id}></MessageContainer>
            </div>
            <div hidden={editable && "hidden"} className={styles.userLogin}>
                <div className={styles.userLogin}>
                    <input onChange={emailChangeHandler} className={[styles.email, styles.inputData].join(' ')} type="email" placeholder="Correo" />
                    <input onChange={passwordChangeHandler} className={styles.inputData} type="password" placeholder="Contraseña" />
                    <button type="submit" className={styles.inputData}>Save</button>
                </div>
            </div>
        </form>
    );
}
export default ProfileCard;