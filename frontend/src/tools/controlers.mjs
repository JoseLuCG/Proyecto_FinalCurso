import { URL } from "./defines.mjs"
//----------Constatnts----------
const jsonData = JSON.stringify(data);
const params = {
    method: 'POST',
    body: jsonData,
    headers: {
        "Content-Type": "application/json"
    }
};

//----------Functions----------
export async function registrerUser (data) {
    const response = await fetch(
        URL+"/singup/",
        params
    );
}

//----------FETCH----------

// Mokup data.
/*
const data = {
    userData
}

fetch(
    URL+'/singup/',
    {
        method: 'POST',
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    }
);
*/