import getMessagesData from "./dataHandlers/getMessagesDataHandler.mjs";

async function getUserMessagesControler(request, response) {
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

export {
    getUserMessagesControler
}