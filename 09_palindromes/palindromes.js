const palindromes = function (input) {
    let lowerInput = input.toLowerCase();
    let normalizedInput = lowerInput.replace(/[^a-z0-9]/g, "");
    let splitInput = normalizedInput.split("");
    let reverseInput = splitInput.reverse();
    let joinInput = reverseInput.join("");
    
    return joinInput == normalizedInput;
};

// Do not edit below this line
module.exports = palindromes;
