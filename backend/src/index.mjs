import express from "express";
import { getUsersControler, loginUSerControler, singupControler, putUserControler} from "./controlers/controlersSqlite.mjs";
<<<<<<< HEAD
//import { config } from "dotenv"
//import { getUsersControlerMdb, loginUSerControlerMdb, singupControlerMdb } from "./controlers/controlersMongodb.mjs";
import { PORT } from "./models/defines.mjs";

=======
import { config } from "dotenv"
//import { getUsersControlerMdb, loginUSerControlerMdb, singupControlerMdb } from "./controlers/controlersMongodb.mjs";
import { PORT } from "./models/defines.mjs";
>>>>>>> 6cc8ad6437cf362b5fd5b021f75a8c6cd59b4746
/*
if ( process.env.NODE_ENV != "production" ) {
    config()
}
*/
<<<<<<< HEAD

// ----------Create the instances of express: ----------
=======
//Create the instances of express:
>>>>>>> 6cc8ad6437cf362b5fd5b021f75a8c6cd59b4746
const app = express();
const jsonParser = express.json();

/*
// Endpoints of the API with Mongodb:
/*
try{
    //----------Instance of deploy----------
    app.use("/",express.static("../frontend/build/", {index: "index.html"}));
    
    //----------User endpoints----------
    app.post("/singup/", jsonParser , singupControlerMdb );
    app.post("/login/", jsonParser, loginUSerControlerMdb);
    app.get("/users/", getUsersControlerMdb);
    //----------Listen the port----------
    app.listen( process.env.PORT, ()=> {
        console.log(`Listening at ${process.env.PORT}`,"Express Running") 
    });
}catch(err){
    console.log(err); 
}
*/

// Endpoints of the API with sqlite3:

try{
    app.use("/",express.static("../frontend/build/", {index: "index.html"}))
<<<<<<< HEAD

=======
>>>>>>> 6cc8ad6437cf362b5fd5b021f75a8c6cd59b4746
    app.post("/singup/",jsonParser, singupControler);
    app.post("/login/", jsonParser, loginUSerControler);
    app.put("/user-edit/", jsonParser, putUserControler);
    //app.delete("/user/:id", jsonParser, deleteUserControler);
    app.get("/users/", getUsersControler);

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
