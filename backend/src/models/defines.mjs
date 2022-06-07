export const  PORT = 4000;
export const PATH_PREFIX = "/api/v0.0";

export const defaultCallback =  (err) => {
    if (err) {
        console.error(err);
        res.sendStatus(500);
    } else {
        res.sendStatus(201)
        
    }
};