const palindromes = function (string) {
    const alphanum = "abcdefghijklmnopqrstuvwxyz1234567890";

    const simpleString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanum.includes(character))
    .join('');

    const stringReverse = simpleString.split('').reverse().join('');

    return simpleString === stringReverse;
};

// Do not edit below this line
module.exports = palindromes;
