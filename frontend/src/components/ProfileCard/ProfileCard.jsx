import PicIcon from "../PicIcon/PicIcon";
import './ProfileCard.css';


function ProfileCard () {
    return (
        <div className="profileContainer">
            <div className="containerPhoto">
                <PicIcon img="https://s.ws.pho.to/img/index/ai/source.jpg"/>
                <h2>Age</h2>
            </div>
            <div>
                <h1 className="nameProfile">Name_profile</h1>
                    <h2>Name</h2>
                    <h2>City</h2>
                    <h2>Interests</h2>
            </div>
            <p>Description
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugit vel, dolor reprehenderit alias cumque sapiente eius
                blanditiis esse et minus veniam atque, laborum ex corporis
                 magnam odit magni odio recusandae.
            </p>
        </div>
    );
}
export default ProfileCard;