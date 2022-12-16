const getTheTitles = function(books) {
    let arrayOfBooks = new Array();
    for (let i = 0; i < books.length; i++)
    {
        arrayOfBooks.push(books[i].title);
    }
    return arrayOfBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
