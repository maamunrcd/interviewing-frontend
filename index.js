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

function flatten(arr) {
    return arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            return acc.concat(flatten(item));
        } else {
            acc.push(item);
        }
        return acc;
    }, []);
}
module.exports = {
    reverse,
    removeDuplicates,
    flatten
};