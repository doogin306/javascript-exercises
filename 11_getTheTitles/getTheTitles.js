const getTheTitles = function(input) {
    let inputArray = input.concat();
    let bookArray = inputArray.map(book => book.title);

    // for (i = 0; i < inputArray.length; i++) {
    //     bookArray.push(inputArray[i]);
    // }

    return(bookArray.concat());
};

// Do not edit below this line
module.exports = getTheTitles;
