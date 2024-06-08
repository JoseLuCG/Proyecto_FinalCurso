import express from "express";
import { getUsersControler, loginUSerControler, singupControler, putUserControler, deleteUserControler} from "./controlers/controlersSqlite.mjs";
//import { config } from "dotenv"
//import { getUsersControlerMdb, loginUSerControlerMdb, singupControlerMdb } from "./controlers/controlersMongodb.mjs";
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
    app.post("/singup/",jsonParser, singupControler);
    app.post("/login/", jsonParser, loginUSerControler);
    app.put("/user-edit/", jsonParser, putUserControler);
    app.delete("/user/:id", jsonParser, deleteUserControler);
    app.get("/users/", getUsersControler);
    
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
