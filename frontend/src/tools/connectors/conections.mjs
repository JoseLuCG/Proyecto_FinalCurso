import { dataToString } from "./../apptools.mjs";
import { URL } from "./../defines.mjs"
// -x-x-x-x-x Fetch Functions -x-x-x-x-x

// ---------- Fetch to get data ----------

/**
 * Realize the fetch at the backend and get the users in
 * the database. 
 * @param {String} url - It is defined in the file 'defines.mjs'. 
 * @returns The array with the users objects.
 */
export async function getUsers (url) {
    const response = await fetch(url+"users/");
    const data = await response.json();
    return data;
}

/**
 * Makes the request to the backend to obtain the user's 
 * interests.
 * @param {String} url - It is defined in the file 'defines.mjs'.
 * @returns 
 */

export async function getInterests(url) {
    const response = await fetch(url+"interests/");
    const data = await response.json();
    return data;
}

export async function getUserMessages(data) {
    const params = dataToString(data);
    const response = await fetch(
        URL + "messages/",
        params
    );
    return await response.json();
}

// ---------- Fetch to send data ----------

/**
 * Realize the fetch at the backend with the user
 * information.
 * @param {Object} data - The user object.
 */
export async function postUser(data) {
    const params = dataToString(data);
    const response = await fetch(
        URL + "singup/",
        params
    );
    return await response.json();
}

/**
 * Sends the login request to the backend with the user information.
 * @param {Object} data - The user object.
 * @returns - The user object who has logged in.
 */
export async function logingUser (data) {
    const params = dataToString(data);
    const response = await fetch(
        URL + "login/",
        params
    );

    return await response.json(); 
}

export async function postMessage(data) {
    const params = dataToString(data);
    const response = await fetch(
        URL + "send-message/",
        params
    );

    return await response.json();
}

export async function cookieProve() {
    const response = await fetch(
        URL + "/session-control"
    );
}

export async function logOut() {
    const options = {
        credentials: 'include'
    };

    const response = await fetch(
        URL + "session-log-out",
        options
    );

    const data = await response.json();
    return data;
}