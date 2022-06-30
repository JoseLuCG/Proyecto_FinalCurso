import CircleButton from '../../components/CircleButton/CircleButton';
import op_icon from '../../iconos_app/options_icon.jpg';
import fil_icon from '../../iconos_app/filtrer_icon.jpg';

function NavigationBar() {
    return (
        <div>
            <CircleButton imgSrc={op_icon}/>
            <CircleButton imgSrc={fil_icon}/>
        </div>
    );
}
export default NavigationBar;