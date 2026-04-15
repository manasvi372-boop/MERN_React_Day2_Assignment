// 1. VARIABLES (let / const vs var)
var oldVar = "I am var";
let age = 20;
const name = "Manasvi";

console.log(name, age, oldVar);

// --------------------------------------------------

// 2. FUNCTIONS (Arrow Function)
const addNumbers = (a, b) => {
  return a + b;
};

console.log("Sum:", addNumbers(5, 3));

// --------------------------------------------------

// 3. CONDITIONALS (Odd/Even + Switch)
const checkNumber = (num) => {
  if (num % 2 === 0) {
    console.log(num, "is Even");
  } else {
    console.log(num, "is Odd");
  }
};

checkNumber(7);

const day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// --------------------------------------------------

// 4. LOOPS (1 to 10)
for (let i = 1; i <= 10; i++) {
  console.log("Number:", i);
}

// --------------------------------------------------

// 5. ARRAYS + MAP
const studentNames = ["Anubrat", "Manu", "Vishu"];

studentNames.map((name) => {
  console.log("Student:", name);
});

// --------------------------------------------------

// 6. OBJECTS
const studentProfile = {
  name: "Manasvi",
  age: 21,
  course: "B.Tech",
};

console.log(studentProfile);

// --------------------------------------------------

// 7. ARRAY METHODS (filter)
const users = [
  { name: "Anubrat", active: true },
  { name: "Vishu", active: false },
];

const activeUsers = users.filter((user) => user.active);
console.log("Active Users:", activeUsers);

// --------------------------------------------------

// 8. DOM (Button text change)
document.getElementById("btn").innerText = "Clicked!";

// --------------------------------------------------

// 9. EVENTS (Click counter)
let count = 0;

document.getElementById("btn").addEventListener("click", () => {
  count++;
  console.log("Button clicked:", count);
});

// --------------------------------------------------

// 10. ES6 FEATURES (Spread + Destructuring)
const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

const person = { pname: "Manasvi", city: "Delhi" };
const { pname, city } = person;
console.log(pname, city);

// --------------------------------------------------

// 11. OOP (Class + Constructor)
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const s1 = new Student("Manasvi", 21);
s1.display();

// --------------------------------------------------

// 12. MODULES (import/export)
// (This works when using multiple files)

// In another file:
// export const greet = () => console.log("Hello");

// Import:
// import { greet } from "./file.js";

// --------------------------------------------------

// 13. PROMISES (Mock API)
const fakeApi = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received!");
  }, 1000);
});

fakeApi.then((res) => console.log(res));

// --------------------------------------------------

// 14. ASYNC/AWAIT
const fetchData = async () => {
  const response = await fakeApi;
  console.log("Async Data:", response);
};

fetchData();

// --------------------------------------------------

// 15. FORMS (Capture Input Data)
const input = document.getElementById("nameInput");

input.addEventListener("change", (e) => {
  console.log("Input Value:", e.target.value);
});