import socketIo from 'socket.io';
import sessionMiddleware from '../middleware/sessionMiddleware.mjs';

let io;

export function initSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true,
            //transports: ['websocket']
          }
    });
    io.engine.use(sessionMiddleware);

} 