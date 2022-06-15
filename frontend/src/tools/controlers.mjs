import { URL } from "./defines.mjs"
//----------Constants----------

//----------Functions----------
/**
 * Realize the fetch at the backend with the user
 * information.
 * @param {Object} data - The user object.
 */
export async function registrerUser (data) {
    const params = dataToString(data)
    const response = await fetch(
        URL+"/singup/",
        params
    );
}
/**
 * Transform `dataAtTrasf` in string and create the
 * body of the fetch.
 * @param {Any} dataAtTrasf - The object to transform in json.  
 * @returns 
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