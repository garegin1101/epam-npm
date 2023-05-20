import generateFakeUser from "./generateFakeUser/index.js";

//generate array with given length
const generateFakeUsers = ( length ) => Array.from({ length }, generateFakeUser);

export default generateFakeUsers;