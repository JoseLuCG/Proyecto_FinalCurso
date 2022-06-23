import { URL } from "./defines.mjs"
//----------Constants----------

//----------Functions----------

//-x-x-x-x-x Generic functions -x-x-x-x-x

/**
 * Transform `dataAtTrasf` in string and create the
 * body of the fetch.
 * @param {Any} dataAtTrasf - The object to transform in json.  
 * @returns - The params of the fetch
 */
 function dataToString (dataAtTrasf) {
    const jsonData = JSON.stringify(dataAtTrasf);
    const params = {
        method: 'POST',
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    };
    return params;
}


//-x-x-x-x-x Fetch Functions -x-x-x-x-x

/**
 * Realize the fetch at the backend with the user
 * information.
 * @param {Object} data - The user object.
 */
export async function postUser(data) {
    const params = dataToString(data);
    const response = await fetch(
        URL + "/singup/",
        params
    );

}
/**
 * Realize the fetch at the backend and get the users in
 * the database. 
 * @param {*} url - It is defined in the file 'defines.mjs'. 
 * @returns The array with the users objects.
 */
export async function getUsers (url) {
    const response = await fetch(url+"/users/");
    const data = await response.json();
    return data;
}
export async function logingUser (data) {
    const params = dataToString(data);
    const response = await fetch(
        URL+"/login/",
        params
    );
    return await response.json(); 
}