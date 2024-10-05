import './NavigationBar.css'
import CircleButton from '../../components/CircleButton/CircleButton';
import SliderMenu from '../SliderMenu/SliderMenu';

function NavigationBar({pathL, pathR, imgL, imgR }) {
    return (
        <header className='hd'>
            <SliderMenu/>
            <CircleButton imgSrc={imgR} path={pathR}/>
        </header>
    );
}
export default NavigationBar;