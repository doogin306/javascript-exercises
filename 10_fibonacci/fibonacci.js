const fibonacci = function(input) {
let inputNum = input;
let fibArray = [0, 1];
var fibNum;

// for (let i = 1; i < inputNum; inputNum - 1) {
//     let fibNum = (inputNum - 1) + (inputNum -2);
//     fibArray.splice(2, 0, fibNum);
// }

if (inputNum < 0) {
    return("OOPS");
} else {

    for (let i = 1; i < inputNum; i++) {
        let fibNum1 = fibArray[((i + 1) - 1)];
        let fibNum2 = fibArray[((i + 1) - 2)];
        fibNum = fibNum1 + fibNum2;
        fibArray.push(fibNum);
    }
}
return(fibArray[input]);

};

// Do not edit below this line
module.exports = fibonacci;
