import { useState, useContext, useEffect } from 'react';
import { OwnUser } from '../../services/OwnUserStorage.jsx';
import { changeValueFactory } from '../../tools/apptools.mjs';
import { postUser } from '../../tools/connectors/conections.mjs';
import PicIcon from "../PicIcon/PicIcon";
import styles from './ProfileCard.module.css';
import InterestItem from '../InterestItem/InterestItem.jsx';


function ProfileCard ({user, editable}) {
    //----------States:----------
    const [ ownUser, setOwnUser ] = useContext(OwnUser);
    const [ nameProfile, setNameProfile ] = useState("");
    const [ nameUser, setNameUser ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ interest, setInterest ] = useState("");
    const [ age , setAge ] = useState (0);
    const [ description, setDescription ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ photo, setPhoto ] = useState("");
    const [ showInterests, setShowInterests] = useState(true);
    
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
        console.log(user);
    }
    

    function loadInterests () {
        if (showInterests) setShowInterests(false);    
        else setShowInterests(true);
    }

    function handleSubmit (event) {
        event.preventDefault();
        checkSendData(userBuilder());
        setOwnUser(userBuilder());    
    }

    async function sendData() {
        const response = await postUser(ownUser);
    }

    useEffect(() => {
        sendData();
      }, [ownUser]);
    
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
            <button className={styles.messageButton}>Mensaje</button>
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

/*
 <div className={styles.profileContainer}>
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
            <button className={styles.messageButton}>Mensaje</button>
            </div>
            <div hidden={editable && "hidden"} className={styles.userLogin}>
                <div className={styles.userLogin}>
                    <input onChange={emailChangeHandler} className={[styles.email, styles.inputData].join(' ')} type="email" placeholder="Correo" />
                    <input onChange={passwordChangeHandler} className={styles.inputData} type="password" placeholder="Contraseña" />
                    <button type="submit" className={styles.inputData}>Save</button>
                </div>
            </div>
        </div>
*/
