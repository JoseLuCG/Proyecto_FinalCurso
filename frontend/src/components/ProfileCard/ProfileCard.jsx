import PicIcon from "../PicIcon/PicIcon";
import './ProfileCard.css';


function ProfileCard () {
    return (
        <div className="profileContainer">
            <div className="containerPhoto">
                <PicIcon img="https://s.ws.pho.to/img/index/ai/source.jpg"/>
                <input id="nameProfile" type="text" placeholder="Edad"/>
            </div>
            <div>
                <input id="nameProfile" type="text" placeholder="Nombre de perfil"/>
                <input id="nameProfile" type="text" placeholder="Nombre"/>
                <input id="nameProfile" type="text" placeholder="Ciudad"/>
                <input id="nameProfile" type="text" placeholder="Intereses"/>
            </div>
            <textarea name="description" id="description" cols="30" rows="10" placeholder="Descripción"></textarea>
        </div>
    );
}
export default ProfileCard;