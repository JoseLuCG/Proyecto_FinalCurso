import { useEffect } from 'react';
import './MessageContainer.css';

function MessageContainer ({hiddeMessages}) {

    useEffect(
        ()=> {
            console.log(hiddeMessages);
        },[hiddeMessages]
    );
    
    return (
        <div hidden={ hiddeMessages && "hidden"}>
        <p>This is the component message</p>
        <p className='message'>This is a message</p>
        </div>
    );
}
export default MessageContainer;