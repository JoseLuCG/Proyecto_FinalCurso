import { mySqlConn } from "../../../connection/connection.mjs";

function setNewMessageHandler(messageTime, idUserEmisor, idUserReceptor, message_body) {
    const sqlQuery = `
        INSERT INTO message_proves_v2 (messageTime, id_emisor_user, id_receptor_user, message_body)
            VALUES ("${messageTime}", ${idUserEmisor},${idUserReceptor},"${message_body}");
    `;

    return new Promise(
        (resolve, reject) => {
            mySqlConn.query(
                sqlQuery,
                (error) => {
                    if (error) {
                        reject(error);   
                    } else {
                        resolve("OK");
                    }
                }
            );
        }
    );
}

export default setNewMessageHandler;