// This is a bad solution ⬇️

const studentNames = ["Diana", "Sam", "Sablina"];
const studentLanguages = ["Arabic", "Portuguese", "Spanish"];
const studentFavoriteColor = ["Green", "Green", "Black"];

// for (let i = 0; i < studentNames.length; i++) {
//   alert(
//     `${studentNames[i]}'s main language is ${studentLanguages[i]} and the favorite color is ${studentFavoriteColor[i]}`
//   );
// }

// This is the way we do it with objects
//This is an example just with one student

const student1 = {
  name: "Sam",
  language: "arabic",
  color: "green",
};

// alert(
//   `${student1.name}'s main language is ${student1.language} and the favorite color is ${student1.color}`
// );

const students = [
  { name: "Sam", language: "arabic", color: "green" },
  { name: "Diana", language: "portuguese", color: "green" },
  { name: "Sablina", language: "spanish", color: "black" },
];

// {
//     name: "...",
//     language: "...",
//     color: "...."
// }

// If I want to show all the info of all the students this is the good practice
// We know that all the students objects will have name, color and language

// Here we will save each object in the array in a variable so that we don't have to do students[i] all the time

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];

//   //If I want to print "I'm --name-- my main language is --language-- and my fav color is --color--"
//   alert(
//     `I'm ${student.name}, my main language is, ${student.language} and my fav color is ${student.color}`
//   );

//   console.log(`The object in position ${i}, is `, student);
// }

// In this example I won't create a temporary variable

for (let i = 0; i < students.length; i++) {
  //If I want to print "I'm --name-- my main language is --language-- and my fav color is --color--"
  alert(
    `I'm ${students[i].name}, my main language is, ${students[i].language} and my fav color is ${students[i].color}`
  );

  console.log(`The object in position ${i}, is `, students[i]);
}
