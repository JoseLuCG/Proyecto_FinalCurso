import './NavigationBar.css'
import CircleButton from '../../components/CircleButton/CircleButton';
import SliderMenu from '../SliderMenu/SliderMenu';

function NavigationBar({pathL, pathR, imgL, imgR }) {
    return (
        <div className='toolBar'>
            <CircleButton imgSrc={imgL} path={pathL}/>
            <SliderMenu/>
            <CircleButton imgSrc={imgR} path={pathR}/>
        </div>
    );
}
export default NavigationBar;