import { Server } from 'socket.io';
import sessionMiddleware from '../middleware/sessionMiddleware.mjs';
import getMessagesData from '../controllers/messagesControllers/dataHandlers/getMessagesDataHandler.mjs';
import setNewMessageHandler from '../controllers/messagesControllers/dataHandlers/setMessageDataHandler.mjs';

let io;

export function initSocket(server) {
    io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true,
          }
    });
    io.engine.use(sessionMiddleware);

    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on("fetch-messages", async ( ids ) => {
            try {
                const {idEmisor, idReceptor} = ids;
                const messages = await getMessagesData(idEmisor, idReceptor);
                socket.emit("messages-data", messages);
            } catch (error) {
                console.error("Error fetching messages:", error);
                socket.emit("fetch-error", { error: "Unable to fetch messages" });
            }
        });

        socket.on("send-message", async (message) => {
            try {
                const {idUserEmisor, idUserReceptor, message_body} = message;
                const promise = await setNewMessageHandler(idUserEmisor,idUserReceptor, message_body);        
                if (promise == 'OK' ) {
                    console.log("OK");
                }
            } catch (error) {
                console.error(error);
            }
            console.log(message);
            
        });

        socket.on("disconnect", ()=> {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
} 