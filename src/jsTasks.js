// 1. Variables
let studentName = "Manasvi";
const instituteName = "FSD Academy";
var oldVariable = "var scope test";
console.log(`Student: ${studentName}, Institute: ${instituteName}`);

// 2. Functions (Arrow)
const calculateSum = (numA, numB) => {
  return numA + numB;
};
console.log("Sum:", calculateSum(5, 10));

// 3. Conditionals
const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(checkEvenOdd(7));

// 4. Loops
for (let i = 1; i <= 10; i++) {
  console.log("Number:", i);
}

// 5. Arrays + map
const devNamesList = ["Anubrat", "Rahul", "Aman"];
devNamesList.map((name) => console.log(`Developer: ${name}`));

// 6. Objects
const studentProfile = {
  name: "Anubrat",
  age: 21,
  course: "MERN"
};
console.log(studentProfile);

// 7. Array Methods (filter)
const activeUsersList = [
  { name: "A", active: true },
  { name: "B", active: false }
];
const filteredUsers = activeUsersList.filter(user => user.active);
console.log("Active Users:", filteredUsers);

// 8. DOM
const changeText = () => {
  document.getElementById("demoText").innerText = "Text Changed!";
};

// 9. Events
let clickCounterValue = 0;
const handleClickCounter = () => {
  clickCounterValue++;
  console.log("Clicks:", clickCounterValue);
};

// 10. ES6 Features
const userInfo = { name: "Anubrat", skill: "React" };
const updatedUser = { ...userInfo, level: "Beginner" };
const { name, skill } = updatedUser;
console.log(name, skill);

// 11. OOP
class DeveloperProfile {
  constructor(devName, techStack) {
    this.devName = devName;
    this.techStack = techStack;
  }

  displayProfile() {
    console.log(`${this.devName} works with ${this.techStack}`);
  }
}
const dev1 = new DeveloperProfile("Anubrat", "MERN");
dev1.displayProfile();

// 12. Modules
export const moduleMessage = "Module Export Working";

// 13. Promises
const mockApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API Data Loaded 🚀");
    }, 1000);
  });
};
mockApiCall().then(res => console.log(res));

// 14. Async/Await
const fetchDataAsync = async () => {
  const data = await mockApiCall();
  console.log("Async Data:", data);
};
fetchDataAsync();

// 15. Forms
const handleFormInput = (event) => {
  console.log("Input Value:", event.target.value);
};