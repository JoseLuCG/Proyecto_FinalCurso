import express from "express";
import { createServer } from "node:http";
import { sessionStore } from "./connection/connectionSessionMySQL.mjs";
import { config } from "dotenv";
import sessionMiddleware from "./middleware/sessionMiddleware.mjs";
import authorizationMiddleware from "./middleware/authorization.mjs";
import corsMiddleware from "./middleware/corsMiddleware.mjs";
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
import { initSocket } from "./connection/socketConnection.mjs";

if ( process.env.NODE_ENV != "production" ) {
    config()
}

// ---------- Create the instances of express: ----------
const app = express();
const server = createServer(app);
const jsonParser = express.json();

// ---------- Endpoints of the API with MySQL: ----------
try{
    if ( process.env.NODE_ENV == "production" ) {
        app.use("/",express.static("../frontend/build/", {index: "index.html"}));
    }
    app.use(corsMiddleware);
    app.use(sessionMiddleware);

    // ---------- Sockets: ----------
    initSocket(server);

    // ----- User Endpoints -----
    app.post("/singup/",jsonParser, singUpUser);
    app.post("/login/", jsonParser, authorizationMiddleware,logingUserController);
    app.get("/users/", getUsersController);
    // TODO: Add the endpoint "/user-edit" for edit the user
    // TODO: Add the endpoint "/user/:id" to delete the user

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