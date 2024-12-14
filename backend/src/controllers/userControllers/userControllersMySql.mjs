import { getUserData } from "./dataHandlers/getUserDataHandler.mjs";
import { getInterestData } from "./dataHandlers/getUserInterestHandler.mjs";
import setUserData from "./dataHandlers/setUserDataHandler.mjs";
import insertUserInterests from "./dataHandlers/setUserInterests.mjs";
import { userMolder } from "./tools/userMold.mjs";

/**
 * Logs the user into the application.
 * @param {*} request Object represents the HTTP request query string. 
 * @param {*} response Object represents the HTTP response that an Express app sends when it gets an HTTP request.
 */
async function logingUserControler(request, response) {
    const {userData,password} = request.body;
    
    try {
        const user = await getUserData(userData, password);
        const userInterests = await getInterestData(user.id);
        const data = userMolder(user, userInterests);
        
        request.session.userId = user.id;
        request.session.nameProfile = user.nameProfile;
        const sessionData = {
            userId : user.id,
            name_profile : user.nameProfile,
            userType : "user acount"
        }
        request.session.data_session = JSON.stringify(sessionData);
        response.status(202).json(data);
    } catch(err) {
        console.error(err);
        response.sendStatus(500);
    }
}

async function singUpUser(request, response) {
    const {
        nameProfile,
        nameUser,
        password,
        location,
        age,
        description,
        email,
        interest
    } = request.body;
    const user = {
        nameProfile: nameProfile,
        nameUser: nameUser,
        password: password,
        location: location,
        age: age,
        description: description,
        email: email,
    }

    try {
        const insertedUser = await setUserData(user);
        const insertedInterests = insertUserInterests(interest, insertedUser.idUser);
        
        if (insertedInterests == "OK") {
            response.sendStatus(200);
        }
    } catch (error) {
        console.error(error);
        response.sendStatus(500);
    }
}

export {
    logingUserControler,
    singUpUser
}