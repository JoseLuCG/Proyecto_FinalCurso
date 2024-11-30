function authorizationMiddleware(request, response, next) {
    if (request.session) {
        //console.log("tienes autorización", request.session);
    }
    next();
}

export default authorizationMiddleware;