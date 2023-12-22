const repeatString = function(string, num) {
    let outputString = "";
    for (i = 0; i < num; i++) {
        outputString += string;
    }
    return(outputString);
};

//repeatString('hey',10);

// Do not edit below this line
module.exports = repeatString;
