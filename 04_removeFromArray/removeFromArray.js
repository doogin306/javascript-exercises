const removeFromArray = function() {
    const array = arguments[0];
    for (i = 0; i < arguments.length; i++) {
        string = arguments[i + 1];
        while (array.includes(string)) {
            array.splice(array.indexOf(string), 1);
        }
    }
    return(array);
};

// Do not edit below this line
module.exports = removeFromArray;
