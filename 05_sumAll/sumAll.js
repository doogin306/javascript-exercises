const sumAll = function(integer1, integer2) {
    if (typeof integer1 != "number" || typeof integer2 != "number") {
        return("ERROR");
    } else {
        array = [integer1, integer2];
        array.sort();
        int1 = parseInt(array[0]);
        int2 = parseInt(array[1]);
        let sum = 0;
        for (i = int1; i <= int2; i++) {
            sum += parseInt(i);
        }
        if (sum < 0) {
            return("ERROR");
        } else {
            return(sum);
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
