const dogsImSitting = ["Coco", "Chanel", "Lila", "Mila"];

// Creating arrays

const namesOfStudents = ["Diana", "Sablina", "Sam"];

const ageOfStudents = [15, 15, 15];
const areStudentsSpanish = [false, false, false];

// Accessing elements in an array

alert(`I have ${namesOfStudents.length} students in my class yayyy`);
alert(`The names of my students are ${namesOfStudents}`);

// -------- Iterating forward
console.log("----- I'm going to iterate through the array forward -----");

for (let i = 0; i < namesOfStudents.length; i++) {
  console.log(`In the array index ${i}, the student is ${namesOfStudents[i]}`);
}

// -------- Iterating backwards
console.log("----- I'm going to iterate through the array backwards -----");

for (let i = namesOfStudents.length - 1; i >= 0; i--) {
  console.log(`In the array index ${i}, the student is ${namesOfStudents[i]}`);
}

// Modifying elements in an array

namesOfStudents[0] = "Dianna";
alert(`After modifying the first element, the students are: ${namesOfStudents}`);

// Now I want to make all of the elements in the array
// namesOfStudents = ["DIANNA, "SABLINA", "SAM"]

console.log("I'm going to make all the names in the array uppercase");

// Goal: I'm going to go through the whole array, and for each one of the elements
// I'm going to make them uppercase.

// starting in the index 0, as long as i is smaller than the length of the array
// (and it needs to be smaller because the arrays start from 0, not from 1)
// and adding one to my index each time it finds an element,
for (let i = 0; i < namesOfStudents.length; i++) {
  //I am selecting the element of the array with the corresponding index

  //(First it will be namesOfStudents[0] and each time is going to increase,
  //so next time it will be namesOfStudents[1] and so on...)

  // After I select the element, I assign to this element whatever value it
  // had inside (namesOfStudents[i]) the same value, but transformed into
  // uppercase letters.
  namesOfStudents[i] = namesOfStudents[i].toUpperCase();

  //After this happens, this element of the array is going to be uppercase
}

//After all the loop was executed, now each one of the elements is uppercase

alert(`Now, the elements of the array in uppercase are ${namesOfStudents}`);

// ----------------------------------------------

// We can add new elements to existing arrays

// Now I want to add to the list of students a new student named Patricia

// In order to add a new element, I can use the method push

namesOfStudents.push("Patricia");

alert(`After pushing Patricia, my students now are ${namesOfStudents}`);

// It was a mistake, Patricia belongs to other class so I'm going to remove her

namesOfStudents.pop();

alert(`Patricia went out of the class, so now my students are ${namesOfStudents}`);
