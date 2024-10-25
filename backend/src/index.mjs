import express from "express";
import { singUpUser, logingUserControler, getInterestControler, logingUserControlerFirstEntry, getUsersControler, sendMessage } from "./controlers/controlersMySql.mjs";
//import { config } from "dotenv"
import { PORT } from "./models/defines.mjs";

/*
if ( process.env.NODE_ENV != "production" ) {
    config()
}
*/

// ---------- Create the instances of express: ----------
const app = express();
const jsonParser = express.json();

// ---------- Endpoints of the API with MySQL: ----------

try{
    app.use("/",express.static("../frontend/build/", {index: "index.html"}))
    app.post("/singup/",jsonParser, singUpUser/*, logingUserControlerFirstEntry*/);
    app.post("/login/", jsonParser, logingUserControler);
    app.post("/send-message/", jsonParser, sendMessage);
    //app.put("/user-edit/", jsonParser, putUserControler);
    //app.delete("/user/:id", jsonParser, deleteUserControler);
    app.get("/users/", getUsersControler);
    app.get("/interests", getInterestControler);
    
    //----------Listen the port----------
    app.listen( /*process.env.*/PORT, ()=> {
        console.log(`Listening at ${/*process.env.*/PORT}`,"Express Running") 
    });

    app.use((err, req, res, next)=>{
        console.error(err);
        next()
    })
}catch (err){
    console.log(err);
}
