import { useState, useContext, useEffect, useRef } from 'react';
import { OwnUser } from '../../services/OwnUserStorage.jsx';
import { postUser } from '../../tools/connectors/conections.mjs';
import styles from './ProfileCard.module.css';
import ChatComponenet from '../ChatComponent/ChatComponent.jsx';
import DataInputs from '../DataInputs/DataInputs.jsx';
import PhotoContainer from '../PhotoContainer/PhotoContainer.jsx';
import EmailPasswordInputs from '../EmailPasswordInputs/EmailPasswordInputs.jsx';

function ProfileCard ({user, editable}) {
    //----------States:----------
    const [ ownUser, setOwnUser ] = useContext(OwnUser);
    const [ userForm, setUserForm ] = useState({
      nameProfile: "",
      nameUser: "",
      password: "",
      location: "",
      interest: "",
      age: 0,
      description: "",
      email: "",
    });
    // https://search.brave.com/search?q=manejo+de+useState+con+objetos&source=desktop&summary=1&summary_og=116d200a65c72bad55c100
    const [ showInterests, setShowInterests] = useState(true);
    const [ hiddeMessages, setHiddeMessages ] = useState(false);
    const prevUserRef = useRef(ownUser);
    const [ flipped, setFlipped ] = useState(false);

    //----------Handlers:----------

    function userFormHandler(event) {
      const { name, value } = event.target;

      setUserForm(previousState => ({
        ...previousState,
        [name]: value
      }));
    }

    function handleFlipCard() {
      setFlipped(!flipped);
    }

    //----------Functions:---------- 
    function userBuilder() {
      let user = {...userForm};
      
      user = {
          nameProfile : userForm.nameProfile,
          nameUser : userForm.nameUser,
          location : userForm.location,
          interest : userForm.interest.split(",").map(
                  (tag) => {
                      return tag.trim(" ").toLowerCase();
                  }),
          password : userForm.password,
          age : userForm.age,
          description : userForm.description,
          email : userForm.email,
          photo :  userForm.photo
      };

      return user;
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
        event.preventDefault();
        setOwnUser(userBuilder());
    }

    async function sendData() {
        const response = await postUser(ownUser);
        console.log("Datos enviados:",ownUser);
    }

    useEffect(() => {
      if ((prevUserRef.current !== ownUser) && typeof user == 'undefined') {
        sendData();
        prevUserRef.current = ownUser;
      }
    });

  return (
    <form className={styles.profileContainer} onSubmit={handleSubmit}>
      <div className={`${styles.flipCard} ${flipped? styles.flipped : ""}`}>
        <div className={styles.frontSide}>
          <PhotoContainer user={user} editable={editable} userForm={userForm} userFormHandler={userFormHandler} />
          <DataInputs user={user} editable={editable} userForm={userForm} userFormHandler={userFormHandler} />
          <div className={styles.textareaDescription}>
            <textarea
              disabled={editable && "disabled"}
              value={user ? user.description : userForm.description}
              onChange={userFormHandler}
              name="description"
              className={styles.description}
              cols="20"
              rows="6"
              placeholder="Descripción">
            </textarea>
            <button type='button' className={styles.messageButton} onClick={handleFlipCard}>Mensaje</button>
          </div>
          <EmailPasswordInputs user={user} editable={editable} userForm={userForm} userFormHandler={userFormHandler} />
        </div>
        <div className={styles.backSide}>
          {
            user ?
              <ChatComponenet key={"M" + user.id} hiddeMessages={hiddeMessages} idUser={user.id}></ChatComponenet> :
              ""
          }
          <button type='button' className={styles.messageButton} onClick={handleFlipCard}>Mensaje</button>
        </div>
      </div>
    </form>
  );
}
export default ProfileCard;