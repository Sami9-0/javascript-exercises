const palindromes = function (theString) {
    theString = (theString.replace(/[^a-zA-Z0-9]/g, ''));
    theString = theString.toLowerCase();
    const splitString = theString.split('');
    let reversedString = '';
    for (let i = splitString.length - 1; i >=0; i--)
    {
        reversedString += splitString[i];
    }
    reversedString = reversedString.split('');
    for(let i = 0; i <= splitString.length-1; i++)
    {
        if (reversedString[i] != splitString[i])
        {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
