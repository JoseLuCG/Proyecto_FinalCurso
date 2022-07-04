import CircleButton from '../../components/CircleButton/CircleButton';
import op_icon from '../../iconos_app/options_icon.jpg';
import fil_icon from '../../iconos_app/filtrer_icon.jpg';


function NavigationBar({actionL, actionR, }) {
    return (
        <div>
            <CircleButton imgSrc={op_icon} action={actionL}/>
            <CircleButton imgSrc={fil_icon} action={actionR}/>
        </div>
    );
}
export default NavigationBar;