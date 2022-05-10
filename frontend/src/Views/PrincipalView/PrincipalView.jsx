import './PrincipalView.css';
import ProfileCard from "../../components/ProfileCard/ProfileCard";

function PrincipalView () {
    return(
        <div className="principalContainer">
            <h1>This is a Principal view</h1>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
            <ProfileCard/>
        </div>
    );
}
export default PrincipalView;