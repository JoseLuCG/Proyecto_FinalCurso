import { Server } from 'socket.io';
import sessionMiddleware from '../middleware/sessionMiddleware.mjs';
import getMessagesData from '../controllers/messagesControllers/dataHandlers/getMessagesDataHandler.mjs';

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

        socket.on("fetch-messages", async ( idEmisor, idReceptor ) => {
            try {
                const messages = await getMessagesData(idEmisor, idReceptor);
                socket.emit("messages-data", messages);
            } catch (error) {
                console.error("Error fetching messages:", error);
                socket.emit("fetch-error", { error: "Unable to fetch messages" });
            }
        });

        socket.on("disconnect", ()=> {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
} 