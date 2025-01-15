import { useEffect, useRef, useState } from 'react';
import './MessageContainer.css';
import { changeValueFactory } from '../../tools/apptools.mjs';
import { useContext } from 'react';
import { OwnUser } from '../../services/OwnUserStorage';
import { getUserMessages, postMessage } from '../../tools/connectors/conections.mjs';
import { socket } from '../../tools/connectors/socketConnections.mjs';

function MessageContainer ({hiddeMessages, idUser}) {
    const [message, setMessage] = useState("");
    const [messagesArray, setMessagesArray] = useState([]);
    const ownUser = useContext(OwnUser);
    const wasSent = useRef(false);
    const ownUserID = ownUser[0].id;
    const previousMessagesRef = useRef(messagesArray);

    const messageHandler = changeValueFactory(setMessage);

    function messageConstruct(msg) {
        return {
            idUserEmisor: ownUserID,
            idUserReceptor: idUser,
            message_body: msg
        };
    }

    function sendMessageHandler() {
        if (message !== "") {
            const newMessage = messageConstruct(message);
            setMessagesArray(prevMessages => [...prevMessages, newMessage]);
            setMessage("");
            wasSent.current = true;
        }
    }

    // !! This way!
    function isFirstTime() {
        if (messagesArray.length == 0) return true;
        else return false;
    }

    function isOurMessage(message) {
        if (
            idUser == message.id_emisor_user || 
            idUser == message.id_receptor_user
        ) return true;
        else return false;
    }

    function getNonRepeatedMessages(messagesObtained) {
        const arrayTemplate = [];
        if(isFirstTime()) {
            console.log("¿Primera vez?");
            setMessagesArray(messagesObtained);
            for (let msg of messagesObtained) {
                if (isOurMessage(msg)) {
                    arrayTemplate.push(msg);
                }
            }
        } else {
            console.log("¡Ya se ha hecho una vez!");
        }
        setMessagesArray(arrayTemplate);
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

    // Set up socket listeners and emitters
    useEffect(
        () => {
            const idEmisor = ownUserID;
            const idReceptor = idUser;
            socket.emit("fetch-messages", { idEmisor, idReceptor });
            
            // Listen for incoming messages
            socket.on('messages-data', (messages) => {
                if (messages.length > 0) {
                    getNonRepeatedMessages(messages);
                }
            });
        return () => {
        // Cleanup socket on unmount
        socket.off('receiveMessage');
        };
        }, []
    );

    useEffect(
        ()=> {
            console.log(`Messages array user's ${idUser}: `, messagesArray);
            if (previousMessagesRef.current !== messagesArray) {
                if (wasSent.current) {
                    sendData();
                    wasSent.current = false;   
                }
                previousMessagesRef.current = messagesArray;
                return;
            }

        },[messagesArray]
    );
    
    return (
        <div 
        hidden={ hiddeMessages && "hidden"}
        className='msg-cntr'
        >
            <div>
                <button type="button" onClick={getMessagesData}>LOAD MESSAGES</button>
            </div>
            <div className='wallpaper'>
            {
                messagesArray.map(
                    (msg) => {
                        return(
                        <p
                        key={"mm"+ idUser}
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
            key={"T" + idUser}
            ></textarea>
            <button className='snd-bttn' type="button" onClick={sendMessageHandler}></button>
        </div>
        </div>
    );
}
export default MessageContainer;