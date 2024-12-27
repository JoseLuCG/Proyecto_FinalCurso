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
import { 
    interestsRoutes,
    logErrors,
    logMessages,
    messageRoutes,
    sessionRoutes,
    userRoutes 
} from "./tools/defines.mjs";

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
    app.post(userRoutes.newUserRegistrationPath, jsonParser, singUpUser);
    app.post(userRoutes.logInUser, jsonParser, authorizationMiddleware,logingUserController);
    app.get(userRoutes.obtainUsers, getUsersController);
    // TODO: Add the endpoint "/user-edit" for edit the user
    // TODO: Add the endpoint "/user/:id" to delete the user

    // ----- Interests Endpoints -----
    app.get(interestsRoutes.obtainInterests, getInterestsController);

    // ----- Messages Endpoints -----
    app.post(messageRoutes.getNewMessage, jsonParser, sendMessageController);
    app.post(messageRoutes.obtainMessages, jsonParser, getUserMessagesController);

    // ----- Session Management -----
    app.get(sessionRoutes.closeSession, logOut);

    
    //---------- Listen the port ----------
    sessionStore.onReady()
    .then(()=> {
        console.log(logMessages.mySQLStoreOkStatus);
        server.listen(process.env.PORT, () => {
            console.log(logMessages.expressOkStatus, process.env.PORT);
        }); 
    }).catch((error)=> {
        console.error(logErrors.storeSynchronizationError, error);
        
    });

    app.use((err, req, res, next)=>{
        console.error(err);
        next()
    });

}catch (error){
    console.log(logErrors.serverError, error);
}