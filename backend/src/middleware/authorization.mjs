import jwt from 'jsonwebtoken';

function authorizationJWTMiddleware(request, response, next) {
    /*
    try {
        const token = request.headers.authorization?.split(" ")[1];
        const payload = jwt.verify(token, process.env.SECRET);
        response.locals.userId = payload.userId;
        return next();
    } catch (error) {
        response.status(403).send("Forbidden")
    }
    */
   next();
}

export default authorizationJWTMiddleware;