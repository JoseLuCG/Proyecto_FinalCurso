import CircleButton from '../../components/CircleButton/CircleButton';
import './RegistrerView.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import { Link } from 'react-router-dom';

function RegistrerView() {
    //----------States:----------
 
    //----------Handlers:----------

    return (
        <div className='registrerContainer'>
            <h1>This is the RegistrerView</h1>
            <CircleButton />
            <h1>Completa tus datos:</h1>
            <ProfileCard/>
            <Link to={"/profiles/"}>
                <button >Entrar</button>
            </Link>
        </div>
    );
}
export default RegistrerView;