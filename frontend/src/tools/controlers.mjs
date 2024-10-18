import { URL } from "./defines.mjs"

//-x-x-x-x-x Fetch Functions -x-x-x-x-x


export async function logingUser (data) {
    const params = dataToString(data);
    const response = await fetch(
        URL+"login/",
        params
    );
    return await response.json(); 
}