const fibonacci = function(index) {
    if (!index.isInteger)
    {
        index = parseInt(index);
    }
    let previousNum = 1;
    let currentNum = 1;
    if (index === 1 || index === 2)
    {
        return 1;
    }
    else if (index < 0)
    {
        return 'OOPS';
    }

    for (let i = 2; i < index; i++)
    {
        let saved = currentNum;
        currentNum = currentNum + previousNum;
        previousNum = saved;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
