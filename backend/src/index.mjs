import express from "express";
import { getUsersControler, singupControler } from "./controlers/controlers.mjs";
import { PORT } from "./models/defines.mjs";

//Create the instances:
const app = express();
const jsonParser = express.json();


// Endpoints of the API:
try{
    app.post("/singup/",jsonParser, singupControler);
    app.get("/users/", getUsersControler);

    app.listen(PORT, ()=>{
        console.log("Express Running...")
    });

    app.use((err, req, res, next)=>{
        console.error(err);
        next()
    })
    
}catch (err){
    console.log(err);
}