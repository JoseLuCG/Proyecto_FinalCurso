import CircleButton from '../../components/CircleButton/CircleButton';
import './EditingView.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import back from './../../assets/icons//back_icon.jpg';
import { useContext } from "react";
import { OwnUser } from '../../services/OwnUserStorage.jsx';

function EditingView() {
    //----------States:----------
    const [ user ] = useContext(OwnUser);
    //----------Handlers:----------

    return(
        <>
            <main className='editContainer'>
                <CircleButton imgSrc={back} path={-1}/>
                <h1>Edita tus datos:</h1>
                <div>
                    <ProfileCard user={user}/>    
                </div>
            </main>
        </>
    );
}
export default EditingView;