const reverseString = function(text) {
    let myArray = text.split("");
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--)
    {
        reverse += myArray[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
