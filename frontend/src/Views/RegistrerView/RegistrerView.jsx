import CircleButton from '../../components/CircleButton/CircleButton';
import SaveButton from '../../components/SaveButton/SaveButton';
import './RegistrerView.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';

function RegistrerView() {

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