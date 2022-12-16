const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    const oldest = people.sort((a, b) => {
        let lastGuy;
        let nextGuy;
        if (a.yearOfDeath === undefined || b.yearOfDeath === undefined)
        {
            if (!(a.yearOfDeath === undefined))
            {
                lastGuy = a.yearOfDeath - a.yearOfBirth;
                nextGuy = currentYear - b.yearOfBirth;
            }
            else if (!(b.yearOfDeath === undefined))
            {
                lastGuy = currentYear - a.yearOfBirth;
                nextGuy = b.yearOfDeath - b.yearOfBirth;
            }
            else
            {
                lastGuy = currentYear - a.yearOfBirth;
                nextGuy = currentYear - a.yearOfBirth;
            }
        }
        else
        {
            lastGuy = a.yearOfDeath - a.yearOfBirth;
            nextGuy = b.yearOfDeath - b.yearOfBirth;
        }
        return (lastGuy > nextGuy) ? -1 : 1;
    });


    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
