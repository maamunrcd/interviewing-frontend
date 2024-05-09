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
module.exports = {
    reverse
};