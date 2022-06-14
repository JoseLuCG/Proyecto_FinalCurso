import { URL } from "./defines.mjs"
//----------Constatnts----------
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

//----------Functions----------
export async function registrerUser (data) {
    const params = dataToString(data)
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