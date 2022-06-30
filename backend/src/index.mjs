import express from "express";
import { getUsersControler, loginUSerControler, singupControler, putUserControler} from "./controlers/controlers.mjs";
import { config } from "dotenv"
//import { PORT } from "./models/defines.mjs";

if ( process.env.NODE_ENV != "production" ) {
    config()
}

//Create the instances:
const app = express();
const jsonParser = express.json();


// Endpoints of the API:
try{
    app.post("/singup/",jsonParser, singupControler);
    app.post("/login/", jsonParser, loginUSerControler);
    app.put("/user-edit/", jsonParser, putUserControler);
    //app.delete("/user/:id", jsonParser, deleteUserControler);
    app.get("/users/", getUsersControler);

    app.listen( process.env.PORT, ()=> {
        console.log(`Listening at ${process.env.PORT}`,"Express Running") 
    });

    /*app.use((err, req, res, next)=>{
        console.error(err);
        next()
    })
    */
}catch (err){
    console.log(err);
}