import express from "express";
import { singUpUser, logingUserControler } from "./controlers/controlersMySql.mjs";
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

// ---------- Endpoints of the API with sqlite3: ----------

try{
    app.use("/",express.static("../frontend/build/", {index: "index.html"}))
    app.post("/singup/",jsonParser, singUpUser, logingUserControler);
    //app.post("/login/", jsonParser, loginUSerControler);
    //app.put("/user-edit/", jsonParser, putUserControler);
    //app.delete("/user/:id", jsonParser, deleteUserControler);
    //app.get("/users/", getUsersControler);
    
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
