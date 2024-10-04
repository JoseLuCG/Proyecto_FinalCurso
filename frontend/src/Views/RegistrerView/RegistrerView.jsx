import CircleButton from '../../components/CircleButton/CircleButton';
import './RegistrerView.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import { Link } from 'react-router-dom';
import back from '../../assets/icons/back_icon.jpg';

function RegistrerView() {
    //----------States:----------
 
    //----------Handlers:----------

    return (
        <div className='registrerContainer'>
            <CircleButton imgSrc={back} path={-1}/>
            <h1>Completa tus datos:</h1>
            <ProfileCard/>
            <Link to={"/profiles/"}>
                <button >Entrar</button>
            </Link>
        </div>
    );
}
export default RegistrerView;