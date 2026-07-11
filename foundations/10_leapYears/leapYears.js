const leapYears = function (year) {
    const isDivisibleFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisibleFourHundred = year % 400 === 0;

    if (isDivisibleFourHundred && (!isCentury || isDivisibleFourHundred)) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
