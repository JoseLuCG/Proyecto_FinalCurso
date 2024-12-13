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