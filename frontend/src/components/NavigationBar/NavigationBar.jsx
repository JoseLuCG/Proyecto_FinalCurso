import CircleButton from '../../components/CircleButton/CircleButton';

function NavigationBar({actionL, actionR, imgL, imgR }) {
    return (
        <div>
            <CircleButton imgSrc={imgL} action={actionL}/>
            <CircleButton imgSrc={imgR} action={actionR}/>
        </div>
    );
}
export default NavigationBar;