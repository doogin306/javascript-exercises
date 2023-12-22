const reverseString = function(string) {
    let newString = "";
    for (i = 0; i < string.length; i++) {
        newString += string.charAt(string.length -i - 1);
    }
    return(newString);
};

// Do not edit below this line
module.exports = reverseString;
