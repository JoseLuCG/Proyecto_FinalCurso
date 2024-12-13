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
    /*
        (err,result)=>{
            if (err){
                console.error(err);
                res.status(500).json({ message: "Error loging user into database." });
                
            } else {
                let data = result[0];
                if (data) {
                    req.session.userId = data.id;
                    req.session.nameProfile = data.nameProfile;
                    const sessionData = {
                        userId : data.id,
                        name_profile : data.nameProfile,
                        userType : "user acount"
                    }
                    req.session.data_session = JSON.stringify(sessionData);
                    res.status(201).json(data);
                    //console.log(req.session);   
                } else {
                    res.sendStatus(401).json({ message: "Error. Authorization is required." });
                }
            }
        }
    */
}

export {
    logingUserControler
}