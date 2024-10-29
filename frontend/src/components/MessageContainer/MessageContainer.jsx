import { useEffect, useRef, useState } from 'react';
import './MessageContainer.css';
import { changeValueFactory } from '../../tools/apptools.mjs';
import { useContext } from 'react';
import { OwnUser } from '../../services/OwnUserStorage';
import { getUserMessages, postMessage } from '../../tools/connectors/conections.mjs';

function MessageContainer ({hiddeMessages, idUser}) {
    const [message, setMessage] = useState("");
    const [messagesArray, setMessagesArray] = useState([]);
    const ownUser = useContext(OwnUser);
    const wasSent = useRef(false);
    const ownUserID = ownUser[0].id;
    const previousMessagesRef = useRef(messagesArray);

    const messageHandler = changeValueFactory(setMessage);

    function messageConstruct(msg) {
        let message = {
            idUserEmisor: ownUserID,
            idUserReceptor: idUser,
            message_body: msg
        };
        return message;
    }


    function sendMessageHandler() {
        if (message !== "") {
            setMessagesArray(prevMessages => [...prevMessages, messageConstruct(message)]);
            setMessage("");   
        }
    }
    // ---------- Async Functions ----------
    async function getMessagesData() {
        const backendMessages = [];
        const dataParameters = {
            idEmisor : ownUserID,
            idReceptor : idUser
        }
        const response = await getUserMessages(dataParameters);
    
        for (const msg in response) {
            backendMessages.push(response[msg]);
        }
        setMessagesArray(backendMessages);    
    }

    async function sendData() {
        const response = await postMessage(messagesArray[messagesArray.length-1]);
    }

    useEffect(
        ()=> {
            console.log(messagesArray);
            
            /*
            if (previousMessagesRef.current !== messagesArray) {
                sendData();
                previousMessagesRef.current = messagesArray;
                return;
            }
            */
        },[messagesArray]
    );
    
    return (
        <div 
        hidden={ hiddeMessages && "hidden"}
        className='msg-cntr'
        >
            <div>
                <button onClick={getMessagesData}>LOAD MESSAGES</button>
            </div>
            <div className='wallpaper'>
            {
                messagesArray.map(
                    (msg) => {
                        return(
                        <p 
                        className={(msg.id_emisor_user == ownUserID) && "myMessage"}
                        >
                            {msg.message_body}
                        </p>
                    )}
                )
            }
            </div>
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