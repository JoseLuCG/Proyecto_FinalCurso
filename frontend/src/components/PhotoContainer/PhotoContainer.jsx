import { useState } from 'react';
import './PhotoContainer';
import PicIcon from '../PicIcon/PicIcon';
import defaultImg from './../../assets/default-img.jpg';
import styles from './PhotoContainer.module.css';

function PhotoContainer({user, editable, userForm, userFormHandler}) {
    
    return(
        <div className='containerPhotoAge'>
        <PicIcon img={defaultImg} />
        <input
          name='age'
          disabled={editable && "disabled"}
          value={user ? user.age : userForm.age}
          onChange={userFormHandler}
          className={[styles.age, styles.inputData].join(' ')}
          type="number"
          placeholder="Edad"
          min="10"
          max="100"
        />
      </div>
    );
}

export default PhotoContainer;