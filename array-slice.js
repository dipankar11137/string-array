// slice 
/* 
const number = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3];
const numberSlice = number.slice(4, 9);
console.log(numberSlice); 
*/

// splice -1
/* 
const number = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3];
const numberSpliced = number.splice(4, 2);
console.log(numberSpliced);
console.log(number);
 */

// splice -2

const number = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3];
const numberSpliced2 = number.splice(4, 2, 34, 66, 77, 88, 99);
console.log(numberSpliced2);
console.log(number);


