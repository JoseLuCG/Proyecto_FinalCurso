import CircleButton from '../../components/CircleButton/CircleButton';

function NavigationBar({pathL, pathR, imgL, imgR }) {
    return (
        <div>
            <CircleButton imgSrc={imgL} path={pathL}/>
            <CircleButton imgSrc={imgR} path={pathR}/>
        </div>
    );
}
export default NavigationBar;