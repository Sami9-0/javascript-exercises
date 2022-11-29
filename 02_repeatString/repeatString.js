const repeatString = function(text, num) {
    let repeat = '';
    if (num < 0)
    {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++)
    {
        repeat += text;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
