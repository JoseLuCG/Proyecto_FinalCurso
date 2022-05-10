import PicIcon from "../PicIcon/PicIcon";
import './ProfileCard.css';


function ProfileCard () {
    return (
        <div className="profileContainer">
            <div>
                <PicIcon img="https://s.ws.pho.to/img/index/ai/source.jpg"/>
                <ul>
                    <li>Age</li>
                </ul>
            </div>
            <h1 className="nameProfile">name_profile</h1>
            <ul>
                <li>Name</li>
                <li>City</li>
                <li>Interests</li>
                <li>Age</li>
                <li>Description</li>
            </ul>
        </div>
    );
}
export default ProfileCard;