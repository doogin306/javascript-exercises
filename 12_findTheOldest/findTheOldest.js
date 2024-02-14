const findTheOldest = function(input) {

let oldest = input.reduce((oldestPerson, currentPerson) => {

    let ageOldest = getAge(oldestPerson);
    let ageCurrent = getAge(currentPerson);

    return (ageCurrent > ageOldest) ? currentPerson : oldestPerson;
}, input[0]);

return(oldest);

};

let getAge = function(person) {

let currentYear = new Date().getFullYear();

let birthYear = person.yearOfBirth;
let deathYear = person.yearOfDeath || currentYear;

let age = deathYear - birthYear;

return(age);

}

// Do not edit below this line
module.exports = findTheOldest;
