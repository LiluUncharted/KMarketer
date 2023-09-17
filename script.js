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
const score = 72;
switch (true) {
    case score >= 97:
        grade = "A+";
        break;
    case score >= 93:
        grade = "A";
        break;
    case score >= 90:
        grade = "A-";
        break;
    case score >= 87:
        grade = "B+";
        break;
    case score >= 83:
        grade = "B";
        break;
    case score >= 80:
        grade = "B-";
        break;    
    case score >= 77:
        grade = "C+";
        break;
    case score >= 73:
        grade = "C";
        break;
    case score >= 70:
        grade = "C-";
        break;
    case score >= 67:
        grade = "D+";
        break;    
    case score >= 63:
        grade = "D";
        break;
    case score >= 60:
        grade = "D-";
        break;
    default:
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




//Homework 16
//1
const fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

console.log(fruits.length);
console.log(fruits);

//2
const numbers = [1, 2, 3, 4, 5];
const removedNumber = numbers.pop();
console.log(removedNumber);

numbers.shift();
console.log(numbers);

//3
const color = ["red", "green", "blue", "yellow"];
const green = color.indexOf("green");
console.log(green);

const hasOrange = color.includes("orange");
console.log(hasOrange);

//4
const peopleNames = ["John", "Jane", "Mike", "Jennifer"];
peopleNames.unshift("David");
console.log(peopleNames);

const mike = peopleNames.indexOf("Mike");
console.log(mike);

//5
const nums = [2,4,6,8,10];
const has5 = nums.includes(5);
console.log(has5);

nums.push(12);
console.log(nums);

//6
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const sortedMonths = months.toSorted();
console.log(sortedMonths);

//7
const result1 = months.filter((word) => word.length > 3);
console.log(result1);

//8
const result2 = months.slice(5, 11);
console.log(result2);

//9
const result3 = sortedMonths.filter((word) => word.length >= 5);
console.log(result3.join("-"));
