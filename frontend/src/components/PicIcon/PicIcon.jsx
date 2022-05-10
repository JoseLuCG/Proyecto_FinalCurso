import './PicIcon.css';


function PicIcon({img}) {
    return (
        <div className="picContainer">
            <img src={img}/>
        </div>
    );
}
export default PicIcon;