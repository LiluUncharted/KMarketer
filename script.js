//Homework 13
let country = "Moldova";
let continent = "Europe";
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

let sarahBMI = weightSarah / heightSarah ** 2;
console.log(sarahBMI);

let bobBMI = weightBob / heightBob ** 2;
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

const totalPrice = isAvailable
  ? price * quantity
  : "The product is out of stock!";
console.log(totalPrice);

//4
const currentYear = 2023;
const isLeapYear =
  (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0;
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
  console.log(
    `You will be ${X} in ${Y}, and will get married to ${Z} with ${N} kids`
  );
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
};

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
const nums = [2, 4, 6, 8, 10];
const has5 = nums.includes(5);
console.log(has5);

nums.push(12);
console.log(nums);

//6
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
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
  ["Ben", "Tommy", "Sofia"],
];
const namesDepartment = [];

for (let i = 0; i < department.length; i++) {
  for (let j = 0; j < department[i].length; j++) {
    console.log(department[i][j]);
    namesDepartment.push(department[i][j]);
  }
}
namesDepartment.sort();
console.log(namesDepartment);

//Упражнения с объектами:
//5
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 3,
  profession: "developer",
};

function CountProperties(obj) {
  const keys = Object.keys(obj);
  return keys.length;
}

const propertyCount = CountProperties(person);
console.log(`Number of properties in a given object: ${propertyCount}`);

//6
function GenerateArray(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

const n = 9;
const generatedArray = GenerateArray(n);
console.log(generatedArray);

//7
const numberMas = [4, 8, 2, 12, 3, 21];
function FindLargestNumber(arr) {
  let theBiggestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > theBiggestNumber) {
      theBiggestNumber = arr[i];
    }
  }
  return theBiggestNumber;
}

const largestNumber = FindLargestNumber(numberMas);
console.log(`The biggest number in array is ${largestNumber}`);

//8
function CalculateAverage(grades) {
  const gradeValues = Object.values(grades);
  const sum = gradeValues.reduce((total, grade) => total + grade, 0);
  const average = sum / gradeValues.length;
  return average;
}

const studentGrades = {
  math: 7,
  history: 9,
  biology: 8,
  literature: 10,
  chemistry: 9,
};

const averageGrade = CalculateAverage(studentGrades);
console.log(`Average mark: ${averageGrade}`);

//9
const dog = new Object();
dog.name = "Bobby";
dog.age = 3;
dog.color = "White";

function AddPuppies(dog, numberOfPuppies) {
  dog.puppies = [];
  for (let i = 1; i <= numberOfPuppies; i++) {
    dog.puppies.push(`"Puppie_${i}"`);
  }
}

AddPuppies(dog, 6);
console.log(`name: ${dog.name}`);
console.log(`age: ${dog.age}`);
console.log(`color: ${dog.color}`);
console.log(`puppies: ${dog.puppies.join(",")}`);

//Homework 18
//1 Цикл по объекту
let PersPropsArray = (person) => {
  let keys = Object.keys(person);
  let i = 0;
  while (i < keys.length) {
    let key = keys[i];
    console.log(key + ":" + person[key]);
    i++;
  }
};

const pers = {
  name: "John",
  age: 30,
  city: "New-York",
};
PersPropsArray(pers); //name:John
//age:30
//city:New-York

//2 Поиск по объекту
let FindWords = (pers, keyToFind) => {
  for (key in pers) {
    if (key === keyToFind) {
      return true;
    }
  }
  return false;
};

let keyToFind = "age";
let hasKey = FindWords(pers, keyToFind);
console.log(`The property ${keyToFind} is in the object? ${hasKey}`); //The property age is in the object? true

//3 Объединение значений
function CombineWords(obj) {
  let keys = Object.keys(obj);
  let combineValue = "";
  let i = 0;
  do {
    let currentProp = keys[i];
    combineValue += obj[currentProp];
    i++;
  } while (i < keys.length);
  return combineValue;
}

const obj = {
  prop1: "Hello",
  prop2: "World",
  prop3: "!",
};

console.log(CombineWords(obj)); //HelloWorld!

//4 Количество гласных
let CountVolwes = (string) => {
  let lowerString = string.toLowerCase();
  let volwes = ["a", "e", "i", "o", "u", "y"];
  let resultVolwes = 0;
  let i = 0;
  while (i < string.length) {
    if (volwes.indexOf(lowerString[i]) !== -1) {
      resultVolwes++;
    }
    i++;
  }
  return resultVolwes;
};

const inputString = "Hello world, my name is Albert";
console.log(CountVolwes(inputString)); //9

//5 Классификация студентов
const CalcStudentAverage = (scoresByStudent) => {
  let resultScores = Object.assign({}, scoresByStudent);
  for (student in scoresByStudent) {
    let scores = scoresByStudent[student];
    i = 0;
    let sum = 0;
    let average = 0;
    let studentScoresLength = scores.length;
    while (i < studentScoresLength) {
      sum += scores[i];
      i++;
    }
    average = sum / studentScoresLength;
    resultScores[student] = `medium: ${average.toFixed(2)}`;
  }
  return resultScores;
};

const studentScores = {
  John: [8, 7, 9],
  Mary: [9, 9, 10],
  Alex: [6, 8, 7],
};

console.log(CalcStudentAverage(studentScores)); //{John: 'medium: 8.00', Mary: 'medium: 9.33', Alex: 'medium: 7.00'}

//6 Переворачивание строки
const ReverseString = (string) => {
  const stringArray = string.split("");
  const resultStringArray = [];
  let i = stringArray.length - 1;
  do {
    resultStringArray.push(stringArray[i]);
    i--;
  } while (i >= 0);
  const resultString = resultStringArray.join("");
  return resultString;
};

const mainString = "Hello World!";
console.log(ReverseString(mainString)); //!dlroW olleH

//7 Проверка палиндрома
const IsPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const word = "level";
const isPalindromic = IsPalindrome(word);
console.log(isPalindromic); //true

//Homework 19
//1 Задача усреднения
const studentGrade = [
  { name: "Anna", note: 9 },
  { name: "Denis", note: 7 },
  { name: "Cristian", note: 8 },
  { name: "Daniel", note: 6 },
  { name: "Elena", note: 10 },
];

const CountAverage = (grades) => {
  const sum = grades.reduce((total, grade) => total + grade.note, 0);
  const average = sum / grades.length;
  return average;
};

const averageGrades = CountAverage(studentGrade);
console.log(`Students average: ${averageGrades}`); //Students average: 8

//2 Фильтрация и сопоставление
const products = [
  { name: "Tshirt", price: 50, isAvailable: true },
  { name: "Pants", price: 80, isAvailable: false },
  { name: "Jacket", price: 120, isAvailable: true },
  { name: "Shirt", price: 60, isAvailable: true },
  { name: "Skirt", price: 40, isAvailable: false },
];

const FilterProducts = (products) => {
  const available = products.filter((product) => product.isAvailable);
  const availableProducts = available.map((avProduct) => avProduct.name);
  return availableProducts;
};

const availableProducts = FilterProducts(products);
console.log(`Available products: ${availableProducts.join(",")}`); //Available products: Tshirt,Jacket,Shirt

//3 Нахождение максимального элемента
const val = [10, 5, 8, 15, 3, 20];

const MaxVal = (numbers) => {
  const maxValue = numbers.reduce(
    (total, numb) => (total = Math.max(total, numb))
  );
  return maxValue;
};

const maxValue = MaxVal(val);
console.log(`The biggest number in array is ${maxValue}`); //The biggest number in array is 20

//4 Классификация студентов
const studentsGrade = [
  { John: [8, 7, 9] },
  { Mary: [9, 9, 10] },
  { Alex: [6, 8, 7] },
];

const CalcAverageGrade = (students) => {
  const result = students.reduce((accumulator, student) => {
    const studentName = Object.keys(student)[0];
    const grades = student[studentName];
    const averageGrade =
      grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    accumulator[studentName] = averageGrade.toFixed(1);
    return accumulator;
  }, {});
  return result;
};

const separateAverage = CalcAverageGrade(studentsGrade);
console.log(separateAverage); //{John: '8.0', Mary: '9.3', Alex: '7.0'}

//Homework 20
//1
let studentProp = {
  firstName: "John",
  lastName: "Doe",
  faculty: "history",
  year: 3,
};

const User = ({ firstName, lastName, faculty, year }) => {
  console.log([`${firstName} ${lastName}`, faculty, year]); //['John Doe', 'history', 3]
};

User(studentProp);

//2
let inputColors = ["red", "green", "blue", "violet"];

const Colors = ([color1, , color3]) => {
  return `${color1}, ${color3}`;
};

console.log(Colors(inputColors)); //red, blue

//or
const getElements = ([first, , third]) => [first, third];

console.log(getElements(inputColors)); //['red', 'blue']

//Spread и Rest операторы
//3
const numbArray = (...args) => args;

const newNumbsArray = numbArray(5, 48, 21, 74, 10, 15, 3);
console.log(newNumbsArray); //[5, 48, 21, 74, 10, 15, 3]

//4
let arr1 = ["green", "red", "blue"];
let arr2 = [3, 4, 5];

const getSpread = (array1, array2) => [...array1, ...array2];

let newPropArray = getSpread(arr1, arr2);
console.log(newPropArray); //['green', 'red', 'blue', 3, 4, 5]

//5
let newProp = { language: "en" };

const addLanguage = (student, lang) => ({ ...student, ...lang });

const updateStudent = addLanguage(studentProp, newProp);
console.log(updateStudent); //{firstName: 'John', lastName: 'Doe', faculty: 'history', year: 3, language: 'en'}

//6*
function ConvertString(word) {
  const lowercaseWord = word.toLowerCase();
  const charCounts = {};
  for (const char of lowercaseWord) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  let result = "";
  for (const char of lowercaseWord) {
    if (charCounts[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}

console.log(ConvertString("din"));
console.log(ConvertString("recede"));
console.log(ConvertString("Success"));
console.log(ConvertString("(( @"));

//7*
const evenNumb = [2, 4, 0, 100, 4, 11, 2602, 36];
const oddNumb = [160, 3, 1719, 19, 11, 13, -21];

function findOutlier(int) {
  let even = int.filter((a) => a % 2 === 0);
  let odd = int.filter((a) => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier(evenNumb));
console.log(findOutlier(oddNumb));