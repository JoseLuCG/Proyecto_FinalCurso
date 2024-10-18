// ------------------------- FACTORY --------------------------------
/**
 * A factory for the each handler of the RegistrerView. 
 * @param {seter} setState - A seter of the each `useState`.
 * @returns A handler function for each `useState`.
 */
export function changeValueFactory(setState) {
    return function (ev) {
        setState(ev.target.value)
    }
}

// ------------------------- TOOLS --------------------------------

/**
 * Transform `dataAtTrasf` in string and create the
 * body of the fetch.
 * @param {Any} dataAtTrasf - The object to transform in json.  
 * @returns - The params of the fetch
 */
export function dataToString (dataToTransfer) {
    const jsonData = JSON.stringify(dataToTransfer);
    const params = {
        method: 'POST',
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    };
    return params;
}