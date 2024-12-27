import session from "express-session";
import { sessionStore } from "./../connection/connectionSessionMySQL.mjs";
import { config } from "dotenv";

if ( process.env.NODE_ENV != "production" ) {
    config()
}
const cookieDuration = 1000 * 60 * 15; // * Will linger 15 minutes

const sessionMiddleware = session({
    key: "cookie_session",
    secret: process.env.SECRET,
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
});

export default sessionMiddleware;