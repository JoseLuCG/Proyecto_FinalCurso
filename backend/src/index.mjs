import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import session from "express-session";
import connectSessionSequelize from "connect-session-sequelize" ;
import { sessionStore } from "./connection/connectionSessionMySQL.mjs";
import cors from 'cors'
import { config } from "dotenv";
import authorizationMiddleware from "./middleware/authorization.mjs";
import { 
    logingUserController,
    singUpUser,
    getUsersController
} from "./controllers/userControllers/userControllersMySql.mjs";
import getInterestsController from "./controllers/interestsControllers/interestsControllersMySql.mjs";
import { 
    getUserMessagesController,
    sendMessageController
} from "./controllers/messagesControllers/messagesControllersMySql.mjs";
import { logOut } from "./controllers/sessionControllers/sessionControllersMySql.mjs";

if ( process.env.NODE_ENV != "production" ) {
    config()
}

// ---------- Create the instances of express: ----------
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
    transports: ['websocket']
  }
});
const jsonParser = express.json();
const cookieDuration = 1000 * 60 * 15; // * Will linger 15 minutes
const SequelizeStore = connectSessionSequelize(session.Store);


// ---------- Endpoints of the API with MySQL: ----------

try{
    //app.use("/",express.static("../frontend/build/", {index: "index.html"}));

    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));

    app.use(
        session({
            key: "cookie_session",
            secret: "penguinsarebeautiful",
            resave: false,
            saveUninitialized: false,
            store: sessionStore,
            cookie: { 
                maxAge: cookieDuration,
                httpOnly: false,
                sameSite: true,
                secure: false
            },
            expires: new Date(Date.now() + cookieDuration).toISOString().slice(0,19).replace('T'," ")
    }));

    // ---------- Sockets: ----------
 
    io.engine.on("connection_error", (err) => {
        console.log(err.req);      // the request object
        console.log(err.code);     // the error code, for example 1
        console.log(err.message);  // the error message, for example "Session ID unknown"
        console.log(err.context);  // some additional error context
    });

    // Listen for connections from clients
    io.on('connection', (socket) => {
        console.log('A user connected');

        // Listen for messages from clients
        socket.on('sendMessage', (message) => {
            console.log('Received message:', message);

            // Broadcast the message to the other user
            // Example: Emit the message to a specific room or user
            socket.broadcast.emit('receiveMessage', message);
        });

        // Handle user disconnections
        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
    });


    // ----- User Endpoints -----
    app.post("/singup/",jsonParser, singUpUser);
    app.post("/login/", jsonParser, authorizationMiddleware,logingUserController);
    app.get("/users/", getUsersController);
    //app.put("/user-edit/", jsonParser, putUserControler);
    //app.delete("/user/:id", jsonParser, deleteUserControler);

    // ----- Interests Endpoints -----
    app.get("/interests", getInterestsController);

    // ----- Messages Endpoints -----
    app.post("/send-message/", jsonParser, sendMessageController);
    app.post("/messages/",jsonParser, getUserMessagesController);

    // ----- Session Management -----
    app.get("/session-log-out", logOut);

    
    //---------- Listen the port ----------
    sessionStore.onReady().then(()=> {
        console.log("MySQLStore ready.");
        server.listen(process.env.PORT, () => {
            console.log(`Listening at ${process.env.PORT}`,"Express Running");
        }); 
    }).catch((error)=> {
        console.error('Error syncing the sessions table',error);
        
    });

    app.use((err, req, res, next)=>{
        console.error(err);
        next()
    });

}catch (err){
    console.log(err);
}