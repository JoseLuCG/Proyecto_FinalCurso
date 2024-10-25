import { useEffect, useRef, useState } from 'react';
import './MessageContainer.css';
import { changeValueFactory } from '../../tools/apptools.mjs';

function MessageContainer ({hiddeMessages}) {
    const [message, setMessage] = useState("");
    const wasSent = useRef(false);

    const messageHandler = changeValueFactory(setMessage);

   function sendMessageHandler(event) {
        console.log(message);
        if (wasSent.current) {
            wasSent.current = false;   
        } else {
            wasSent.current = true;
        }
    }

    useEffect(
        ()=> {
            console.log(wasSent);
        }, [wasSent]
    );
    
    return (
        <div 
        hidden={ hiddeMessages && "hidden"}
        className='msg-cntr'
        >
        <p>This is the component message</p>
        <p className='message'>This is a message</p>
        <div>
            <textarea 
            className='msg-inpt' 
            name="msg" 
            id="msg" 
            onChange={messageHandler}
            value={wasSent && ""}
            ></textarea>
            <button className='snd-bttn' type="submit" onClick={sendMessageHandler}></button>
        </div>
        </div>
    );
}
export default MessageContainer;