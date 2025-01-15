import styles from './MessageComponent.module.css';

function MessageComponent({msg, ownUser}) {
   return(
    <div className={
        (msg.id_emisor_user == ownUser)?
        styles.myMessage:
        styles.msgC
        } >
        <p>{msg.message_body}</p>
        <p>12:20</p>
    </div>
   ); 
}

export default MessageComponent;
/*
className={(msg.id_emisor_user == ownUserID) && "myMessage"}
*/