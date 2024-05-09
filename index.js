// Reversing a String

// function reverse(str) {
//     return str.split("").reverse().join('');
// }

function reverse(str) {
    let reverseString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str.charAt(i);
    }
    return reverseString;
}

function removeDuplicates(str) {
    let stringToArray = str.split(" ");
    let set = new Set(stringToArray);
    const newString = [...set].join(" ");
    return newString;
}
module.exports = {
    reverse,
    removeDuplicates
};