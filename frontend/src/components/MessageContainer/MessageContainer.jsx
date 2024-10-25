import { useEffect, useRef, useState } from 'react';
import './MessageContainer.css';
import { changeValueFactory } from '../../tools/apptools.mjs';

function MessageContainer ({hiddeMessages}) {
    const [message, setMessage] = useState("");
    const [messagesArray, setMessagesArray] = useState(["Default message"]);
    const wasSent = useRef(false);

    const messageHandler = changeValueFactory(setMessage);

   function sendMessageHandler() {
        setMessagesArray(prevMessages => [...prevMessages, message]);
        setMessage("");

    }

    useEffect(
        ()=> {
            console.log(messagesArray);
        }, [messagesArray]
    );
    
    return (
        <div 
        hidden={ hiddeMessages && "hidden"}
        className='msg-cntr'
        >
        {
            messagesArray && messagesArray.map(
                (msg) => {
                    return(<p>{msg}</p>)
                }
            )
        }
        <div>
            <textarea 
            className='msg-inpt' 
            name="msg" 
            id="msg" 
            onChange={messageHandler}
            value={message}
            ></textarea>
            <button className='snd-bttn' type="submit" onClick={sendMessageHandler}></button>
        </div>
        </div>
    );
}
export default MessageContainer;