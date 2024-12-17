import { io } from "socket.io-client";
import { sessionCookie } from "../defines.mjs";
// "http://localhost:4000"
export const socket = io("http://localhost:4000", {
    withCredentials: true,
    methods: ["GET", "POST"],
    transports: ['websocket'] 
});

socket.on("connect_error", (err) => {
    // the reason of the error, for example "xhr poll error"
    console.log("Este es el error",err.message);
  
    // some additional description, for example the status code of the initial HTTP response
    console.log(err.description);
  
    // some additional context, for example the XMLHttpRequest object
    console.log(err.context);

    socket.emit("hello", "world");
});