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
