import { generateFakeUsers, sortByName } from "./helpers/index.js";

// 2.a | Generate an array of 10 fake user objects (using faker methods).
const fakeUsers = generateFakeUsers(10);

// 2.b | Print the array of fake users to the console.
console.log(fakeUsers);

/* 2.c | Use the lodash package to sort the array of
         fake users alphabetically based on their names. */
const sortedFakeUsers = sortByName(fakeUsers);

// 2.d | Print the sorted array of users to the console.
console.log(sortedFakeUsers);
