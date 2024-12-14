import getInterestData from "./dataHandlers/getInterestsDataHandler.mjs";


async function getInterestsController(request, response) {
    try {
        const interestsData = await getInterestData();
        response.json(interestsData);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export default getInterestsController;