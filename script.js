let country = 'Moldova';
let continent = 'Europe';
let population = 1.2;
let isIsland = false;
let countryDescription = `${country} is located in ${continent}, ${population} million people live here`;

console.log(country);
console.log(continent);
console.log(population);
console.log(countryDescription);




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