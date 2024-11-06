import { 
    singUpUser, 
    logingUserControler, 
    getInterestControler, 
    logingUserControlerFirstEntry, 
    getUsersControler, 
    sendMessageControler, 
    getUserMessagesControler 
} from "./controlers/controlersMySql.mjs";
//import { config } from "dotenv";
import express from "express";
import session, { Store } from "express-session";
import connectSessionSequelize from "connect-session-sequelize" ;
import { sequelize } from "./connection/sequelizeConn.mjs";
import { PORT } from "./models/defines.mjs";
import { SessionTable } from "./models/sessionModel.mjs";
/*
if ( process.env.NODE_ENV != "production" ) {
    config()
}
*/

// ---------- Create the instances of express: ----------
const app = express();
const jsonParser = express.json();
const cookieDuration = 1000 * 60 * 5; // 5 minutes
const SequelizeStore = connectSessionSequelize(session.Store);


// ---------- Endpoints of the API with MySQL: ----------

try{
    app.use("/",express.static("../frontend/build/", {index: "index.html"}));

    app.use(
        session({
            secret: "penguinsarebeautiful",
            resave: false,
            saveUninitialized: false,
            store: new SequelizeStore({
                db: sequelize,
                table: "sessions",
            }),
            cookie: { maxAge: cookieDuration },
    }));

    // ----- User Endpoints -----
    app.post("/singup/",jsonParser, singUpUser/*, logingUserControlerFirstEntry*/);
    app.post("/login/", jsonParser, logingUserControler);
    app.get("/users/", getUsersControler);
    //app.put("/user-edit/", jsonParser, putUserControler);
    //app.delete("/user/:id", jsonParser, deleteUserControler);

    // ----- Interests Endpoints -----
    app.get("/interests", getInterestControler);

    // ----- Messages Endpoints -----
    app.post("/send-message/", jsonParser, sendMessageControler);
    app.post("/messages/",jsonParser, getUserMessagesControler);
    
    //---------- Listen the port ----------
    /*
    app.listen( / process.env. /PORT, ()=> {
        console.log(`Listening at ${/ process.env. /PORT}`,"Express Running") 
    });
    */

    sequelize.sync({force:false}).then(()=> {
        console.log("Sessions table synced.");
        app.listen(PORT, () => {
            console.log(`Listening at ${PORT}`,"Express Running");
            
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
