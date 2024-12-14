/**
 * Inserts the array of interests into a user object.
 * @param {*} user The user who will receive the array of interests.
 * @param {*} interests Array that will be inserted into the user.
 * @returns The complete `user` object with the interests array.
 */
function userMolder(user, interests) {
    for(let uInterest of interests) {
        if (user.interest) {
            user.interest.push(uInterest.nameInterest);
        } else {
            user.interest = [uInterest.nameInterest];
        }
    }

    return user;
}

export {
    userMolder
}