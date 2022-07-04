// -------------------------FACTORY--------------------------------
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

//--------------------Actions--------------------
export function optionsClick () {
    console.log("Click in options button")
}

export function filtrerClick () {
    console.log("Click in the filtrer Button")
}