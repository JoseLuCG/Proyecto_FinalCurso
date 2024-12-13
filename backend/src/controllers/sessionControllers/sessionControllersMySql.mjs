function logOut(request, response) {
    request.session.destroy((error) =>{
        if (error) {
            console.log("Error destroying session on server.");
            console.error(error);
            response.status(500).send("Error logging out.")
        } else {
            request.sessionStore.destroy(request.sessionID, (error)=>{
                if (error) {
                    console.log("No se ha cerrado correctamente la sesión");
                } else {
                    console.log("Se ha cerrado la sesión correctamente");
                    response.clearCookie('cookie_session').status(200).json({ success: true });
                }
            })
        }
    });
}

export {
    logOut
}