import { mySqlConn } from "../../../connection/connection.mjs";

function getMessagesData(idEmisor, idReceptor) {
    const sqlQuery = `
        SELECT *
            FROM message_proves_v1
            WHERE 
                (id_emisor_user = ?
                AND id_receptor_user = ?)
            OR
                (id_emisor_user = ?
                AND id_receptor_user = ?)
        ;
    `;

    return new Promise (
        (resolve, reject) => {
            mySqlConn.query(
                sqlQuery,
                [idEmisor, idReceptor, idReceptor, idEmisor],
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        const data = result;
                        resolve(data);
                    }
                }
            );
        }
    );
}

export default getMessagesData;