//Homework 13
let country = 'Moldova';
let continent = 'Europe';
let population = 1.2;
let isIsland = false;
let countryDescription = `${country} is located in ${continent}, ${population} million people live here`;

console.log(country);
console.log(continent);
console.log(population);
console.log(countryDescription);



//Homework 14
let weightSarah = 65;
let weightBob = 93;
let heightSarah = 1.75;
let heightBob = 1.89;

let sarahBMI = weightSarah / (heightSarah ** 2);
console.log(sarahBMI);

let bobBMI = weightBob / (heightBob ** 2);
console.log(bobBMI);

if (sarahBMI < 18.5) {
    console.log("Sarah has underweight");
} else if (sarahBMI > 18.5 && sarahBMI < 25) {
    console.log("Sarah has normal weight");
}

if (bobBMI < 18.5 || bobBMI > 25) {
    console.log("Bob has underweight or overweight");
} else {
    console.log("Bob has normal weight");
}



//Homework 15
//Упражнения с тернарным оператором в JavaScript:
//1 
const number = 22;
const numberType = number % 2 !== 0 ? "Odd" : "Even";
console.log(`The ${number} is ${numberType}`);


//2
const isLoggedIn = true;
const messageLog = isLoggedIn ? "Logged In" : "Logged Out";
console.log(messageLog);


//3
const price = 15;
const quantity = 5;
const isAvailable = true;

const totalPrice = isAvailable ? price * quantity : "The product is out of stock!"
console.log(totalPrice);
 

//4
const currentYear = 2023;
const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);
const messageYear = isLeapYear ? "Leap year" : "Not a leap year";
console.log(messageYear);


//Упражнения со switch:
//1
let countryCode = "DE";
switch (countryCode) {
    case "MD":
        countryName = "Moldova";
        break;
    case "US":
        countryName = "United States";
        break;
    case "FR":
        countryName = "France";
        break;
    case "DE":
        countryName = "Germany";
        break;    
    case "JP":
        countryName = "Japan";
        break;
    case "IN":
        countryName = "India";
        break;
    case "BR":
        countryName = "Brazil";
        break;
    default:
        countryName = "Unknown country";
}
console.log(`The ${countryCode} corresponds to the ${countryName}`);


//2
const score = 96;
switch (true) {
    case score >= 97 && score <= 100:
        grade = "A+";
        break;
    case score >= 93 && score <= 96:
        grade = "A";
        break;
    case score >= 90 && score <= 92:
        grade = "A-";
        break;
    case score >= 87 && score <= 89:
        grade = "B+";
        break;
    case score >= 83 && score <= 86:
        grade = "B";
        break;
    case score >= 80 && score <= 82:
        grade = "B-";
        break;    
    case score >= 77 && score <= 79:
        grade = "C+";
        break;
    case score >= 73 && score <= 76:
        grade = "C";
        break;
    case score >= 70 && score <= 72:
        grade = "C-";
        break;
    case score >= 67 && score <= 69:
        grade = "D+";
        break;    
    case score >= 63 && score <= 66:
        grade = "D";
        break;
    case score >= 60 && score <= 62:
        grade = "D-";
        break;
    case score >= 0 && score <= 59:
        grade = "F";
}
console.log(`If score is ${score} grade is ${grade}`);


//Упражнения c Function
//1
function tellFortune(N, Z, Y, X) {
    console.log(`You will be ${X} in ${Y}, and will get married to ${Z} with ${N} kids`);
}
tellFortune(3, "Jhonny", "Chisinau", "a sommelier");
tellFortune(1, "Meg", "California", "a famous actor");
tellFortune(5, "Ted", "New York", "a successfull owner");


//2
function calculatedDogAge(humanYears, conversionRate = 7) {
    const dogYears = humanYears * conversionRate;
    return `Your dog is ${dogYears} years old in dog years`;
}

console.log(calculatedDogAge(2));
console.log(calculatedDogAge(9, 5));
console.log(calculatedDogAge(16, 10));


//3
const calculationSupply = (currentAge, foodPerDay, maxYears = 100) => {
    const yearsRemaining = maxYears - currentAge;
    const totalFoodRequired = yearsRemaining * 365 * foodPerDay;
    return `You will need ${totalFoodRequired} kg of food to survive until to a ripe old age ${maxYears} years`;
}

console.log(calculationSupply(29, 2));
console.log(calculationSupply(56, 1.5));
console.log(calculationSupply(78, 1));