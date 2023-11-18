function checkGetBook(age, job, money) {
        if ((money >= 2000) || (age > 24 && job === true && money >= 1500) || (age > 24 && job === false && money >= 1900)) {
            return true
        } else {
            return false;
        }

}

console.log(checkGetBook(12, false, 0));