import { useState } from 'react';
import InterestItem from '../InterestItem/InterestItem.jsx';
import styles from './DataInputs.module.css';

function DataInputs({user, editable, userForm, userFormHandler}) {
  const [ showInterests, setShowInterests ] = useState(true);

  function loadInterests() {
    if (showInterests) setShowInterests(false);
    else setShowInterests(true);
  }
    return(
        <div className={styles.dataInputs}>
          <input
            name='nameProfile'
            disabled={editable && "disabled"}
            value={user ? user.nameProfile : userForm.nameProfile}
            onChange={userFormHandler}
            className={styles.inputData}
            type="text"
            placeholder="Nombre de perfil"
          />
          <input
            name='nameUser'
            disabled={editable && "disabled"}
            value={user ? user.nameUser : userForm.nameUser}
            onChange={userFormHandler}
            className={styles.inputData}
            type="text"
            placeholder="Nombre"
          />
          <input
            name='location'
            disabled={editable && "disabled"}
            value={user ? user.location : userForm.location}
            onChange={userFormHandler}
            className={styles.inputData}
            type="text"
            placeholder="Ciudad"
          />
          <input
            name='interest'
            disabled={editable && "disabled"}
            hidden={editable && "hidden"}
            onChange={userFormHandler}
            className={styles.inputData}
            type="text"
            placeholder="Intereses"
          />
          <button
            className={styles.deployInterestsButton}
            type='button'
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
                user ?
                  user.interest.map(
                    (interest) => { return (<InterestItem key={interest+ "#" +user.id} interest={interest} />) }
                  )
                  : "None"
              }
            </ul>
          </div>
        </div>
    );
}

export default DataInputs;