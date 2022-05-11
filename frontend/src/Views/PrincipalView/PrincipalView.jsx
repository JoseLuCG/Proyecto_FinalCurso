import './PrincipalView.css';
import ProfileCard from "../../components/ProfileCard/ProfileCard";

function PrincipalView () {
    return(
        <>
            <h1>This is a Principal view</h1>
            <div className="principalContainer">
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
                <ProfileCard/>
        </div>
        </>
    );
}
export default PrincipalView;