export const sqlIDReturn = 'SELECT LAST_INSERT_ID() AS idUser;';

export const userRoutes = {
    newUserRegistrationPath : "/singup/",
    logInUser : "/login/",
    obtainUsers : "/users/",
};

export const interestsRoutes = {
    obtainInterests : "/interests"
};

export const sessionRoutes = {
    closeSession : "/session-log-out"
}

export const messageRoutes = {
    obtainMessages : "/messages/",
    getNewMessage : "/send-message/"
}

export const logMessages = {
    mySQLStoreOkStatus : "MySQL store is ready. ",
    expressOkStatus : "Express Running... Listening at port: "
};

export const logErrors = {
    storeSynchronizationError : "Error syncing the sessions table! ",
    serverError : "An error has occurred on the server! " 
};