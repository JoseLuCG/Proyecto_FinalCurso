import { Server } from 'socket.io';
import sessionMiddleware from '../middleware/sessionMiddleware.mjs';

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

} 