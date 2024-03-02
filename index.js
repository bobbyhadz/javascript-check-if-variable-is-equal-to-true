// EXAMPLE 1 - Check if a Variable is equal to True in JavaScript

const myVar = true;

if (myVar === true) {
  // 👇️ this runs
  console.log('✅ the variable is equal to true');
} else {
  console.log('⛔️ the variable is NOT equal to true');
}

// // -------------------------------------

// // ✅ Check if a variable is truthy

// if (myVar) {
//   // 👇️ this runs
//   console.log('The variable is truthy');
// } else {
//   console.log('The variable is falsy');
// }

// // -------------------------------------

// // ✅ Check if a variable is true and has been declared
// if (typeof another === 'boolean' && another === true) {
//   console.log('The variable is true and has been declared');
// } else {
//   console.log('The variable is NOT true');
// }

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a variable is equal to `true` using `typeof`

// if (typeof another === 'boolean' && another === true) {
//   console.log('The variable is true and has been declared');
// } else {
//   console.log('The variable is NOT true');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Variable is False in JavaScript

// const a = false;

// // ✅ Check if a variable is false

// if (a === false) {
//   // 👇️ this runs
//   console.log('The variable is equal to false');
// } else {
//   console.log('The variable is not equal to false');
// }

// // ----------------------------------------

// // ✅ Check if a variable is falsy
// if (!a) {
//   // 👇️ this runs
//   console.log('The variable is falsy');
// } else {
//   console.log('The variable is truthy');
// }

// // ----------------------------------------

// // ✅ Check if a variable is false using typeof (without error)

// if (typeof abc === 'boolean' && a === false) {
//   console.log('The variable is false');
// } else {
//   console.log('The variable is NOT false');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a variable is equal to `false` using `typeof`

// if (typeof abc === 'boolean' && abc === false) {
//   console.log('The variable is false');
// } else {
//   // 👇️ this runs
//   console.log('The variable is NOT false');
// }
