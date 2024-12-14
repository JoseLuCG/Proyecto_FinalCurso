import { getUserData } from "./dataHandlers/getUserDataHandler.mjs";
import { getInterestData } from "./dataHandlers/getUserInterestHandler.mjs";
import { userMolder } from "./tools/userMold.mjs";

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

export {
    logingUserControler
}