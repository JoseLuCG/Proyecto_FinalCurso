import getMessagesData from "./dataHandlers/getMessagesDataHandler.mjs";
import setNewMessageHandler from "./dataHandlers/setMessageDataHandler.mjs";

async function getUserMessagesController(request, response) {
    // TODO: Implement `socket.io` for manage the connection of messages
    const {
        idEmisor,
        idReceptor,
    } = request.body;

    try {
        const messages = await getMessagesData(idEmisor, idReceptor);
        response.json(messages);
    } catch (error) {
        console.error(error);
        sendStatus(500);
    }
}

async function sendMessageController(request, response) {
    const {
        idUserEmisor,
        idUserReceptor,
        message_body
    } = request.body;
    try {
        const error = await setNewMessageHandler(idUserEmisor,idUserReceptor, message_body);        
        if (error == 'OK' ) {
            response.sendStatus(200);
        }
    } catch (error) {
        console.error(error);
        response.sendStatus(500);
    }    
}

export {
    getUserMessagesController,
    sendMessageController
}