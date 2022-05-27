import { useEffect, useState, useContext } from 'react';
import { Context } from '../../storage/SharedStorage.jsx';
import { changeValueFactory } from '../../tools/apptools.mjs';
import CircleButton from '../../components/CircleButton/CircleButton';
import SaveButton from '../../components/SaveButton/SaveButton';
import './RegistrerView.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';

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

    return(
        <div className='registrerContainer'>
            <h1>This is the RegistrerView</h1>
            <CircleButton/>
            <ProfileCard/>
            <SaveButton/>
        </div>
    );
}
export default RegistrerView;