import styles from './MessageComponent.module.css';

function MessageComponent({msg, ownUser}) {
   return(
    <div className={
        (msg.id_emisor_user == ownUser)?
        styles.myMessage:
        styles.msgC
        } >
        <p className={styles.msgText}>{msg.message_body}</p>
        <p className={styles.time}>12:20</p>
    </div>
   ); 
}

export default MessageComponent;
/*
className={(msg.id_emisor_user == ownUserID) && "myMessage"}
*/