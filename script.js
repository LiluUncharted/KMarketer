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
const anyFruits = [];
anyFruits.push("apple");
anyFruits.push("banana");
anyFruits.push("orange");

console.log(anyFruits.length);
console.log(anyFruits);

//2
const anyNumbers = [1, 2, 3, 4, 5];
const removedNumber = anyNumbers.pop();
console.log(anyNumbers);

anyNumbers.shift();
console.log(anyNumbers);

//3
const color = ["red", "green", "blue", "yellow"];
const green = color.indexOf("green");
console.log(`Index of green is ${green}`);

const hasOrange = color.includes("orange");
console.log(hasOrange);

//4
const peopleNames = ["John", "Jane", "Mike", "Jennifer"];
peopleNames.unshift("David");
console.log(peopleNames);

const mike = peopleNames.indexOf("Mike");
console.log(`Index of Mike is ${mike}`);

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




//Homework 17
//Упражнения с циклами for:
//1
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//2
var sum = 0;
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);


//3
const names = ["John", "Jane", "Mikhael", "Jennifer", "Bobby"];
const namesLenght = [];
for (let i = 0; i < names.length; i++) {
        namesLenght.push(names[i].length);
}
console.log(namesLenght);


//4
const department = [
    ["Michael", "John", "Iren"],
    ["Chris", "Kate"],
    ["Jane", "Bobby", "Ted", "Marshall"],
    ["Ben", "Tommy", "Sofia"]
];
const namesDepartment = [];

for (let i = 0; i < department.length; i++) {
    for (let j = 0; j < department[i].length; j++){
        console.log(department[i][j]);
        namesDepartment.push(department[i][j]);
    }
};
namesDepartment.sort();
console.log(namesDepartment);


//Упражнения с объектами:
//5
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 3, 
    profession: "developer"
};

function countProperties(obj) {
    const keys = Object.keys(obj);
    return keys.length;
};

const propertyCount = countProperties(person);
console.log(`Number of properties in a given object: ${propertyCount}`);


//6
function generateArray(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
};

const n = 9;
const generatedArray = generateArray(n);
console.log(generatedArray);


//7
const numberMas = [4, 8, 2, 12, 3, 21];
function findLargestNumber(arr) {
    let theBiggestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > theBiggestNumber) {
            theBiggestNumber = arr[i];
        }
    }
    return theBiggestNumber;
};

const largestNumber = findLargestNumber(numberMas);
console.log(`The biggest number in array is ${largestNumber}`);

//8
function calculateAverage(grades) {
    const gradeValues = Object.values(grades);
    const sum = gradeValues.reduce((total, grade) => total + grade, 0);
    const average = sum / gradeValues.length;
    return average;
}

const studentGrades = {
    math: 7,
    history: 9,
    biology:8,
    literature: 10,
    chemistry: 9
};

const averageGrade = calculateAverage(studentGrades);
console.log(`Average mark: ${averageGrade}`);

//9
const dog = new Object();
dog.name = "Bobby";
dog.age = 3;
dog.color = "White";

function addPuppies(dog, numberOfPuppies) {
    dog.puppies = [];
    for (let i = 1; i <= numberOfPuppies; i++){
        dog.puppies.push(`"Puppie_${i}"`);
    }
}

addPuppies(dog, 6);
console.log(`name: ${dog.name}`);
console.log(`age: ${dog.age}`);
console.log(`color: ${dog.color}`);
console.log(`puppies: ${dog.puppies.join(',')}`);