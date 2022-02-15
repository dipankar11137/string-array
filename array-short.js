// sorting array

/*  
const numbers = [4, 5, 6, 4, 7, 8, 2, 9, 1, 2, 5, 0];
const shortNumbers = numbers.sort();
// console.log(shortNumbers);

const friends = ['lalu', 'kali', 'bckul', 'abul', 'bablu', "cabli ola"];
// const sortFriends = friends.sort();
// console.log(sortFriends);

// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

const shortedReverFriends = friends.sort().reverse();
console.log(shortedReverFriends);
 */

// number sorting fun for big number 
const bigNumber = [33, 55, 6, 23, 55, 90, 12, 45, 78, 13, 18, 122, 67, 124, 987];
const bigNumberShort = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(bigNumberShort);