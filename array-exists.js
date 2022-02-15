/* 
function megaFriends(friends) {

    if (Array.isArray(friends) == false) {
        return 'please provide an array';

    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
} 
*/

/* 
const friends = ['lalu', 'Kalu', 'hulu', 'subbir', 'sofiq'];
console.log(megaFriends(friends));

// value aca kina chake korta we use (includes)
if (friends.indexOf('lalu') != -1) {
    // console.log('Paice mama');
}
// another way 

if (friends.includes('hulu')) {
    console.log('Paice mama');
}
 */

//  concat (contanition)
const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9];
const combined = first.concat(second);
console.log(combined);
