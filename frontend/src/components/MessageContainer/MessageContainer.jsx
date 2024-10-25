import { useEffect, useRef, useState } from 'react';
import './MessageContainer.css';
import { changeValueFactory } from '../../tools/apptools.mjs';
import { useContext } from 'react';
import { OwnUser } from '../../services/OwnUserStorage';
import { postMessage } from '../../tools/connectors/conections.mjs';

function MessageContainer ({hiddeMessages, idUser}) {
    const [message, setMessage] = useState("");
    const [messagesArray, setMessagesArray] = useState([]);
    const ownUser = useContext(OwnUser);
    const wasSent = useRef(false);
    const ownUserID = ownUser[0].id;

    const messageHandler = changeValueFactory(setMessage);

    function messageConstruct(msg) {
        let message = {
            idUserEmisor: ownUserID,
            idUserReceptor: idUser,
            messageBody: msg
        };
        return message;
    }


    function sendMessageHandler() {
        setMessagesArray(prevMessages => [...prevMessages, messageConstruct(message)]);
        setMessage("");

    }

    async function sendData() {
        const response = await postMessage(messagesArray[messagesArray.length-1]);
    }

    useEffect(
        ()=> {
            sendData();
            console.log("Datos enviados: ", messagesArray[messagesArray.length-1]);
        }, [messagesArray]
    );
    
    return (
        <div 
        hidden={ hiddeMessages && "hidden"}
        className='msg-cntr'
        >
            <button>LOAD MESSAGES</button>
            {
                messagesArray && messagesArray.map(
                    (msg) => {
                        return(<p>{msg.messageBody}</p>)
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