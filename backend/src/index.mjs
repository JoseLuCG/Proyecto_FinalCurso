import {
    getInterestControler, 
    getUsersControler,
    sessionManager,
} from "./controllers/controllersMySql.mjs";
//import { config } from "dotenv";
import express from "express";
import session, { Store } from "express-session";
import connectSessionSequelize from "connect-session-sequelize" ;
import { sequelize } from "./connection/sequelizeConn.mjs";
import { PORT } from "./models/defines.mjs";
import { SessionTable } from "./models/sessionModel.mjs";
import { sessionStore } from "./connection/connectionSessionMySQL.mjs";
import cors from 'cors'
import authorizationMiddleware from "./middleware/authorization.mjs";
import { config } from "dotenv";
import { 
    getUserMessagesController,
    sendMessageController
} from "./controllers/messagesControllers/messagesControllersMySql.mjs";
import { logOut } from "./controllers/sessionControllers/sessionControllersMySql.mjs";
import { 
    logingUserControler,
    singUpUser
} from "./controllers/userControllers/userControllersMySql.mjs";

if ( process.env.NODE_ENV != "production" ) {
    config()
}

// ---------- Create the instances of express: ----------
const app = express();
const jsonParser = express.json();
const cookieDuration = 1000 * 60 * 15; // * Will linger 15 minutes
const SequelizeStore = connectSessionSequelize(session.Store);


// ---------- Endpoints of the API with MySQL: ----------

try{
    app.use("/",express.static("../frontend/build/", {index: "index.html"}));

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

    // ----- User Endpoints -----
    app.post("/singup/",jsonParser, singUpUser/*, logingUserControlerFirstEntry*/);
    app.post("/login/", jsonParser, authorizationMiddleware,logingUserControler);
    app.get("/users/", getUsersControler);
    //app.put("/user-edit/", jsonParser, putUserControler);
    //app.delete("/user/:id", jsonParser, deleteUserControler);

    // ----- Interests Endpoints -----
    app.get("/interests", getInterestControler);

    // ----- Messages Endpoints -----
    app.post("/send-message/", jsonParser, sendMessageController);
    app.post("/messages/",jsonParser, getUserMessagesController);

    // ----- Session Management -----
    app.get("/session-control", sessionManager);
    app.get("/session-log-out", logOut);

    
    //---------- Listen the port ----------
    /*
    app.listen( / process.env. /PORT, ()=> {
        console.log(`Listening at ${/ process.env. /PORT}`,"Express Running") 
    });
    */

    sessionStore.onReady().then(()=> {
        console.log("MySQLStore ready.");
        app.listen(process.env.PORT, () => {
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